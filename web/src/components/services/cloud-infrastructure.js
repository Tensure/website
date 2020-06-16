import React from 'react'
import Container from '../container'

import styles from './cloud-infrastructure.module.css'

const CloudInfrastructure = () => (
  <div className={styles.rootFullWidth}>
    <Container>
      <div className={styles.twoColGrid}>
        <div className={styles.infrastructureTitle}>
          <h2>Cloud</h2>
          <p className={styles.subHeaderWhite}>infrastructure</p>
        </div>
        <div className={styles.infrastructureContent}>
          <h3>Cloud TCO</h3>
          <p>Tensure will evaluate your current infrastructure & determine what the total cost of ownership will be for moving to the cloud.</p>
          <h3>Cloud Migration</h3>
          <p>Migrate your infrastructure to the cloud or from one cloud vendor to another. Tensure’s tool-based approach allows for repeatable and measurable progress that will make moving workloads easy.</p>
          <h3>Security & Regulatory COE</h3>
          <p>Let us evaluate and/ implement your security and regulatory environment in your datacenter or in the cloud. HiTrust, HIPAA, GDPR, SOX, or PCI. You name it, we’ve done it.</p>
        </div>
      </div>
    </Container>
  </div>
)

export default CloudInfrastructure
