import React from 'react'
import PortableText from '../portableText'
import Container from '../container'

import styles from './digital-innovation.module.css'

function DigitalInnovation ({data}) {
  return (
    <div className={styles.rootFullWidth}>
      <Container>
        {data.map(({node: innovation}) => {
          return (
            <div key={innovation.id}>
              <div className={styles.servicesTitleContent}>
                <p className={styles.subHeaderGreen}>{innovation.pageSubtitle}</p>
                <h2>{innovation.pageTitle}</h2>
              </div>

              <div className={styles.twoColGrid}>
                <div className={styles.innovationTitle}>
                  <h2>{innovation.innovationTitle}</h2>
                  <p className={styles.subHeaderGreen}>{innovation.innovationSubtitle}</p>
                </div>
                <div className={styles.innovationContent}>
                  <PortableText blocks={innovation._rawInnovationDescription} />
                </div>
              </div>
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default DigitalInnovation
