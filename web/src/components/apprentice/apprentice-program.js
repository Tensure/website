import {Link} from 'gatsby'
import React from 'react'
import apprenticeProgram from '../images/apprentice/apprentice-program.jpg'
import greenBlueLines from '../images/apprentice/apprentice-green-blue-lines.svg'

import styles from './apprentice-program.module.css'

const ApprenticeProgram = () => (
  <div className={styles.rootFullWidth}>
    <div className={styles.twoColGrid}>
      <div className={styles.apprenticeProgramImage} style={{backgroundImage: `url(${apprenticeProgram})`}}></div>
      <div className={styles.apprenticeProgramContent}>
        <h2>Apprentice</h2>
        <p className={styles.subHeaderGreen}>program</p>
        <p>The apprenticeship program at Tensure is a three-part, phased process that gives individuals with no prior experience the proper guidance and preparation to become proficient developers.</p>
        <p>We believe development is a skilled trade, and the mission of this program is to teach that trade to others. We ask that our apprentices rise to the occasion by making a commitment to the process and bringing a strong desire to change the trajectory of their career and life. If that sounds serious, well….it is. We take this program very seriously because it requires a lot of time and effort from everyone involved. We want to see our apprentices succeed with us and improve their life in the process.</p>
        <Link className={styles.button} to='/apprenticeships/#application'>Apply Now</Link>
      </div>
    </div>
  </div>
)

export default ApprenticeProgram
