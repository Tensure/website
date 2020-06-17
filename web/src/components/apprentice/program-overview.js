import React from 'react'
import volunteer from '../images/apprentice/apprentice-volunteer.jpg'
import greenBlueLines from '../images/apprentice/apprentice-green-blue-lines.png'
import apprenticeship from '../images/apprentice/apprentice-apprenticeship-green-lines.png'
import internship from '../images/apprentice/apprentice-internship.png'

import styles from './program-overview.module.css'

const ProgramOverview = () => (
  <div className={styles.rootFullWidth}>
    <div className={styles.twoColGrid}>
      <div className={styles.mobileShow}>
        <h2>Program</h2>
        <p className={styles.subHeaderGreen}>overview</p>
      </div>
      <div className={styles.programOverviewContent}>
        <h2 className={styles.mobileHide}>Program</h2>
        <p className={`${styles.subHeaderGreen} ${styles.mobileHide}`}>overview</p>
        <h3>Pre-apprenticeship volunteerism</h3>
        <p>Prior to starting the Apprenticeship program at Tensure, we require each candidate to complete 60 hours of volunteer work at an non-profit organization of their choice over the course of 30 days. This is critical, as it proves that any prospective apprentices understand the time commitment expected of them during an Apprenticeship. It also ensures that candidates are able to efficiently manage the time requirement of apprenticing in conjunction with their current life and work obligations. Basically, we know life is busy, so we want to make sure you’re serious about this and prepared for the effort required.</p>
      </div>
      <div className={styles.programOverviewImage} style={{backgroundImage: `url(${volunteer})`}}>
        <img className={styles.greenBlueLines} src={greenBlueLines} alt="Green Blue Lines" />
      </div>
    </div>

    <div className={styles.twoColGrid}>
      <div className={styles.apprenticeshipImage} style={{backgroundImage: `url(${apprenticeship})`}}></div>
      <div className={styles.apprenticeshipContent}>
        <h3>Apprenticeship</h3>
        <p>Once the volunteer phase has been successfully completed, Apprenticeship begins. The program is built on a rigorous curriculum to give apprentices a strong footing to start their dev career. We offer on-demand access to our instructors and mentors, so our apprentices never have to worry about wasting hours stuck on a problem or coming through forums to find direction.</p>
        <p>The program spans between 3 to 6 months, and the timeline is dictated by the apprentice’s skill level and pace of learning. The general structure includes 3 hours of direct teaching per week, along with ~20 hours of self-guided learning & practice work each week. It’s a lot of work, but so the saying goes, if you want something bad enough, you’ll work for it.</p>
      </div>
    </div>

    <div className={styles.twoColGrid}>
      <div className={styles.internshipContent}>
        <h3>Internship</h3>
        <p>If the apprenticeship program is completed successfully, the apprentice may be offered the opportunity to advance into the 3rd program phase—a paid internship role. Our internship program is a 6-month engagement that allows the apprentice to continue to hone their skills and prove whether or not they're ready to be an employed, full-time developer. You can just think of it like a 6-month long interview. Just kidding, that sounds truly horrible.</p>
      </div>
      <div className={styles.internshipImage} style={{backgroundImage: `url(${internship})`}}></div>
    </div>
  </div>
)

export default ProgramOverview
