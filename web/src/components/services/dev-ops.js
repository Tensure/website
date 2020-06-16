import React from 'react'
import Container from '../container'

import styles from './dev-ops.module.css'

const Devops = () => (
  <div className={styles.rootFullWidth}>
    <Container>
      <div className={styles.twoColGrid}>
        <div className={styles.infrastructureTitle}>
          <h2>Dev Ops</h2>
        </div>
        <div className={styles.infrastructureContent}>
          <h3>Delivery Automation</h3>
          <p>Speed of delivery is a key to success. Your competition is moving as fast as possible to release new products and features. Tensure can help you beat them.</p>
          <h3>Infrastructure Automation</h3>
          <p>Treat your infrastructure like your applications. Deploy & Destroy them as needed, ensure you have consistency across your environments.</p>
          <h3>Multi-cloud</h3>
          <p>Your applications need to be able to run where you want them, when you want them, and when you need them. Tensure’s experience in containerization and multi-cloud is second to none.</p>
        </div>
      </div>
    </Container>
  </div>
)

export default Devops
