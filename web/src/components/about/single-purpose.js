import React from 'react'

import styles from './single-purpose.module.css'

const SinglePurpose = ({data}) => {

  return (
    <div>
      {data.map(({ node: section1 }) => (
        <div className={styles.singlePurposeContainer} key={section1.id}>
          <div className={styles.twoColGrid}>
            <div className={styles.singlePurposeContent}>
              <p className={styles.subHeaderGreen}>{section1.subtitle}</p>
              <h2>{section1.title}</h2>
              <p>{section1.paragraph1}</p>
            </div>
            <div className={styles.singlePurposeImage} style={{backgroundImage: `url(${section1.photo1.asset.url})`}}></div>
          </div>
          <div className={styles.twoColGrid}>
            <div className={styles.fullTeamImage} style={{backgroundImage: `url(${section1.photo2.asset.url})`}}></div>
            <div className={styles.fullTeamContent}>
              <p>{section1.paragraph2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

}

export default SinglePurpose
