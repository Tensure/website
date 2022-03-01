import React from 'react'
import PortableText from '../portableText'
import Container from '../container'

import styles from './managed-services.module.css'

const ManagedServices = ({data}) => {
  return (
    <div className={styles.rootFullWidth}>
      <Container>
        {data.map(({node: managed}) => (
          <div className={styles.twoColGrid} key={managed.id}>
            <div className={styles.infrastructureTitle}>
              <h2>{managed.managedTitle}</h2>
              <p className={styles.subHeaderGreen}>{managed.managedSubtitle}</p>
            </div>
            <div className={styles.infrastructureContent}>
              <PortableText blocks={managed._rawManagedDescription} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default ManagedServices
