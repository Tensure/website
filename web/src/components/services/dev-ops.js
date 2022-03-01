import React from 'react'
import PortableText from '../portableText'
import Container from '../container'

import styles from './dev-ops.module.css'

const Devops = ({data}) => {
  return (
    <div className={styles.rootFullWidth}>
      <Container>
        {data.map(({node: devops}) => (
          <div className={styles.twoColGrid} key={devops.id}>
            <div className={styles.infrastructureTitle}>
              <h2>{devops.devTitle}</h2>
            </div>
            <div className={styles.infrastructureContent}>
              <PortableText blocks={devops._rawDevDescription} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Devops
