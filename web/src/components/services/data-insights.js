import React from 'react'
import PortableText from '../portableText'
import Container from '../container'

import styles from './data-insights.module.css'

const DataInsights = ({data}) => {

  return (
    <div className={styles.rootFullWidth}>
      <Container>
        {data.map(({ node: insights }) => (
          <div className={styles.twoColGrid} key={insights.id}>
            <div className={styles.infrastructureTitle}>
              <h2>{insights.dataTitle}</h2>
              <p className={styles.subHeaderWhite}>{insights.dataSubtitle}</p>
            </div>
            <div className={styles.infrastructureContent}>
              <PortableText blocks={insights._rawDataDescription} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  )

}

export default DataInsights
