import React from 'react'
import Container from '../container'

import styles from './managed-services.module.css'

const Devops = () => (
  <div className={styles.rootFullWidth}>
    <Container>
      <div className={styles.twoColGrid}>
        <div className={styles.infrastructureTitle}>
          <h2>Managed</h2>
          <p className={styles.subHeaderGreen}>services</p>
        </div>
        <div className={styles.infrastructureContent}>
          <h3>Sustained Engineering</h3>
          <p>Tensure knows IT, you know your business. Let’s partner together to build what you need</p>
          <h3>Cloud Management</h3>
          <p>Buy your cloud through us and we’ll manage it along with you. Our engineers will work with you to ensure the environment meets your standards, keeps cost low, and uses best practices for cloud environments.</p>
        </div>
      </div>
    </Container>
  </div>
)

export default Devops
