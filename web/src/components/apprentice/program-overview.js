import React from 'react'
import PortableText from '../portableText'

import greenBlueLines from '../images/apprentice/apprentice-green-blue-lines.png'

import styles from './program-overview.module.css'

const ProgramOverview = ({data}) => {

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
              <h2 className={styles.mobileHide}>{overview.overviewTitle}</h2>
              <p className={`${styles.subHeaderGreen} ${styles.mobileHide}`}>{overview.overviewSubtitle}</p>
              <PortableText blocks={overview._rawVolunteerContent} />
            </div>
            <div className={styles.programOverviewImage} style={{backgroundImage: `url(${overview.volunteerPhoto.asset.url})`}}>
              <img className={styles.greenBlueLines} src={greenBlueLines} alt="Green Blue Lines" />
            </div>
          </div>

          <div className={styles.twoColGrid}>
            <div className={styles.apprenticeshipImage} style={{backgroundImage: `url(${overview.apprenticeshipPhoto.asset.url})`}}></div>
            <div className={styles.apprenticeshipContent}>
              <PortableText blocks={overview._rawApprenticeshipContent} />
            </div>
          </div>

          <div className={styles.twoColGrid}>
            <div className={styles.internshipContent}>
              <PortableText blocks={overview._rawInternshipContent} />
            </div>
            <div className={styles.internshipImage} style={{backgroundImage: `url(${overview.internshipPhoto.asset.url})`}}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramOverview
