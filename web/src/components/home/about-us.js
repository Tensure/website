import {Link} from 'gatsby'
import React from 'react'
import bridge from '../images/home/home-about-bridge.jpg'

import styles from './about-us.module.css'

const AboutUs = () => (
  <div className={styles.rootFullWidth}>
    <div className={styles.twoColGrid} id='aboutUs'>
      <div className={styles.aboutUsImage} style={{backgroundImage: `url(${bridge})`}}></div>
      <div className={styles.aboutUsContent}>
        <p className={styles.subHeaderGreen}>support begets freedom</p>
        <h2>About Us</h2>
        <p>The word “Tensure” is derived from an Old English word for tension—like the tension that keeps a bridge held up, providing a structure and support to help people get to where they want to go.</p>
        <p>We aim to be that same type of support for our team, our clients and our community and in turn, provide them with the freedom to go where they want and do what they want to do.</p>
        <Link className={styles.button} to='/who-we-are/'>Read More</Link>
      </div>
    </div>
  </div>
)

export default AboutUs
