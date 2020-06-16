import React from 'react'
import Container from '../container'

import styles from './digital-innovation.module.css'

const DigitalInnovation = () => (
  <div className={styles.rootFullWidth}>
    <Container>
      <div className={styles.servicesTitleContent}>
        <p className={styles.subHeaderGreen}>our services</p>
        <h2>What We Do</h2>
      </div>

      <div className={styles.twoColGrid}>
        <div className={styles.innovationTitle}>
          <h2>Digital</h2>
          <p className={styles.subHeaderGreen}>innovation</p>
        </div>
        <div className={styles.innovationContent}>
          <h3>Next Gen App Development</h3>
          <p>Tensure will evaluate your current infrastructure & determine what the total cost of ownership will be for moving to the cloud.</p>
          <h3>Digital Disruption</h3>
          <p>Tensure will evaluate your current infrastructure & determine what the total cost of ownership will be for moving to the cloud.</p>
        </div>
      </div>
    </Container>
  </div>
)

export default DigitalInnovation
