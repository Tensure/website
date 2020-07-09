import React, { useEffect } from 'react'
import {Link} from 'gatsby'
import PortableText from '../portableText'
import apprenticeProgram from '../images/apprentice/apprentice-program.jpg'

import styles from './apprentice-program.module.css'

function ApprenticeProgram({data}) {

  useEffect(() => {
    let windowWidth = window.innerWidth;
    if( windowWidth > 639 ){
      function programParallax() {
        let s = document.querySelector('[id*="programFloater"]');
        let yPos = 0 - window.pageYOffset/11;
        s.style.top = 0 + yPos + "px";
      }

      window.addEventListener( 'scroll', programParallax );

      return () => window.removeEventListener( 'scroll', programParallax );
    }
  });

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: program }) => (
        <div className={styles.twoColGrid} key={program.id}>
          <div className={styles.apprenticeProgramImage} style={{backgroundImage: `url(${program.programPhoto.asset.url})`}}></div>
          <div className={styles.apprenticeProgramContent}>
            <div id={styles.programFloater}>
              <h2>{program.programTitle}</h2>
              <p className={styles.subHeaderGreen}>{program.programSubtitle}</p>
              <PortableText blocks={program._rawProgramDescription} />
              <Link className={styles.button} to={`${program.programUrl}`}>{program.programButton}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ApprenticeProgram