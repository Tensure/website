import {Link} from 'gatsby'
import React from 'react'
import services from '../images/home/home-services-bridge.jpg'

import styles from './services.module.css'

const Services = () => (
  <div className={styles.twoColGrid}>
    <div className={styles.servicesContentContainer}>
      <div className={styles.servicesContent}>
        <p className={styles.subHeaderTuscany}>yes, we do that.</p>
        <h2>Services</h2>
        <p>You know, the type of work that you would expect a development consultancy to do? Yes, we almost certainly do that. We do a lot of things—from custom software design to cloud infrastructure and machine learning. We focus on creating technology solutions that solve your problems, giving you the freedom to spend more time on valuable work and waste less time with slow, bad, or old technology.</p>
        <Link className={styles.button} to='/what-we-do/'>View Services</Link>
      </div>
    </div>
    <div className={styles.servicesImage} style={{backgroundImage: `url(${services})`}}></div>
  </div>
)

export default Services
