import {Link} from 'gatsby'
import React from 'react'
import apprentice from '../images/home/home-apprentice.jpg'

import styles from './apprentice-at-tensure.module.css'

const ApprenticeAtTensure = () => (
  <div className={styles.rootFullWidth}>
    <div className={styles.twoColGrid}>
      <div className={styles.apprenticeImage} style={{backgroundImage: `url(${apprentice})`}}></div>
      <div className={styles.apprenticeContent}>
        <p className={styles.subHeaderGreen}>change your course</p>
        <h2>Apprentice At Tensure</h2>
        <p>This program requires no prior experience in development. We think of it as a fresh start for individuals who are determined to change their career trajectory and in doing so, also change their lives.</p>
        <p>The apprenticeship program at Tensure prepares aspiring developers for a solid career through mentorship and structured, in-depth instruction and continuing education.</p>
        <Link className={styles.button} to='/apprenticeships/'>Learn More</Link>
      </div>
    </div>
  </div>
)

export default ApprenticeAtTensure
