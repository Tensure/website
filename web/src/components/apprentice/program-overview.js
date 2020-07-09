import React, { useEffect } from 'react'
import PortableText from '../portableText'

import greenBlueLines from '../images/apprentice/apprentice-green-blue-lines.png'

import styles from './program-overview.module.css'

function ProgramOverview({data}) {

  useEffect(() => {
    let windowWidth = window.innerWidth;
    if( windowWidth > 639 ){
      function overviewParallax() {
        let s = document.querySelector('[id*="overviewFloater"]');
        let s2 = document.querySelector('[id*="overview2Floater"]');
        let s3 = document.querySelector('[id*="overview3Floater"]');
        let yPos = 0 - window.pageYOffset/11;
        s.style.top = 50 + yPos + "px";
        s2.style.top = 100 + yPos + "px";
        s3.style.top = 150 + yPos + "px";
      }

      window.addEventListener( 'scroll', overviewParallax );

      return () => window.removeEventListener( 'scroll', overviewParallax );
    }
  });

  return (
    <div>
      {data.map(({ node: overview }) => (
        <div className={styles.rootFullWidth} key={overview.id}>
          <div className={styles.twoColGrid}>
            <div className={styles.mobileShow}>
              <h2>{overview.overviewTitle}</h2>
              <p className={styles.subHeaderGreen}>{overview.overviewSubtitle}</p>
            </div>
            <div className={styles.programOverviewContent}>
              <div id={styles.overviewFloater}>
                <h2 className={styles.mobileHide}>{overview.overviewTitle}</h2>
                <p className={`${styles.subHeaderGreen} ${styles.mobileHide}`}>{overview.overviewSubtitle}</p>
                <PortableText blocks={overview._rawVolunteerContent} />
              </div>
            </div>
            <div className={styles.programOverviewImage} style={{backgroundImage: `url(${overview.volunteerPhoto.asset.url})`}}>
              <img className={styles.greenBlueLines} src={greenBlueLines} alt="Green Blue Lines" />
            </div>
          </div>

          <div className={styles.twoColGrid}>
            <div className={styles.apprenticeshipImage} style={{backgroundImage: `url(${overview.apprenticeshipPhoto.asset.url})`}}></div>
            <div className={styles.apprenticeshipContent}>
              <div id={styles.overview2Floater}>
                <PortableText blocks={overview._rawApprenticeshipContent} />
              </div>
            </div>
          </div>

          <div className={styles.twoColGrid}>
            <div className={styles.internshipContent}>
              <div id={styles.overview3Floater}>
                <PortableText blocks={overview._rawInternshipContent} />
              </div>
            </div>
            <div className={styles.internshipImage} style={{backgroundImage: `url(${overview.internshipPhoto.asset.url})`}}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramOverview
