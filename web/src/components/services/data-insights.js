import React from 'react'
import Container from '../container'

import styles from './data-insights.module.css'

const DataInsights = () => (
  <div className={styles.rootFullWidth}>
    <Container>
      <div className={styles.twoColGrid}>
        <div className={styles.infrastructureTitle}>
          <h2>Data</h2>
          <p className={styles.subHeaderWhite}>& insights</p>
        </div>
        <div className={styles.infrastructureContent}>
          <h3>Cloud Enterprise Data Warehouse</h3>
          <p>Tensure will evaluate your current infrastructure & determine what the total cost of ownership will be for moving to the cloud.</p>
          <h3>AI Innovation</h3>
          <p>Understand the art of the possible when it comes to AI. Let us show you how you can use data to drive decisions and transform your business.</p>
          <h3>AI Activation</h3>
          <p>Work with Tensure to take AI out of experimental and use it at scale.</p>
          <h3>Data Testing & Quality</h3>
          <p>End-to-end quality doesn’t stop at your application. Ensure your data has quality built in from the start.</p>
          <h3>Robotic Process Automation</h3>
          <p>Don’t repeat yourself. Automate repetitive tasks and let your team add real value.</p>
        </div>
      </div>
    </Container>
  </div>
)

export default DataInsights
