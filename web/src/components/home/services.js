import React, { useEffect } from 'react'
import {Link} from 'gatsby'
import PortableText from '../portableText'

import styles from './services.module.css'

function Services({data}) {

  useEffect(() => {
    let windowWidth = window.innerWidth;
    if( windowWidth > 768 ){
      function servicesParallax() {
        let s = document.querySelector('[id*="servicesFloater"]');
        let yPos = 0 - window.pageYOffset/9;
        s.style.top = 200 + yPos + "px";
      }

      window.addEventListener( 'scroll', servicesParallax );

      return () => window.removeEventListener( 'scroll', servicesParallax );
    }
  });

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: services }) => (
        <div className={styles.twoColGrid} key={services.id}>
          <div className={styles.servicesContentContainer}>
            <div className={styles.servicesContent}>
              <div id={styles.servicesFloater}>
                <p className={styles.subHeaderTuscany}>{services.servicesSubtitle}</p>
                <h2>{services.servicesTitle}</h2>
                <PortableText blocks={services._rawServicesDescription} />
                <Link className={styles.button} to={`${services.servicesUrl}`}>{services.servicesButton}</Link>
              </div>
            </div>
          </div>
          <div className={styles.servicesImage} style={{backgroundImage: `url(${services.servicesPhoto.asset.url})`}}></div>
        </div>
      ))}
    </div>
  )
}

export default Services
