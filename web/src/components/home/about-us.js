import React from 'react'
import {Link} from 'gatsby'
import PortableText from '../portableText'

import styles from './about-us.module.css'

const AboutUs = ({data}) => {

  // let windowWidth = window.innerWidth;
  // if( windowWidth > 639 ){
  //   function aboutParallax() {
  //     let s = document.querySelector('[id*="aboutFloater"]');
  //     let yPos = 0 - window.pageYOffset/11;	
  //     s.style.top = 75 + yPos + "px";
  //   }

  //   window.addEventListener("scroll", function(){
  //     aboutParallax();	
  //   });
  // }

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: about }) => (
        <div className={styles.twoColGrid} id='aboutUs' key={about.id}>
          <div className={styles.aboutUsImage} style={{backgroundImage: `url(${about.aboutPhoto.asset.url})`}}></div>
          <div className={styles.aboutUsContent}>
            {/* <div id={styles.aboutFloater}> */}
              <p className={styles.subHeaderGreen}>{about.aboutSubtitle}</p>
              <h2>{about.aboutTitle}</h2>
              <PortableText blocks={about._rawAboutDescription} />
              <Link className={styles.button} to={`${about.aboutUrl}`}>{about.aboutButton}</Link>
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AboutUs
