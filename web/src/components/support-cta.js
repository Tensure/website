import React from 'react'
import {Link} from 'gatsby'
import Container from '../components/container'
import background from './images/home/support-cta-bridge-bg.jpg'

import styles from './support-cta.module.css'

const SupportCTA = () => (
  <div className={styles.rootFullWidth} style={{backgroundImage: `url(${background})`}}>
    <Container>
      <div className={styles.supportContent}>
        <h2>how can we support you?</h2>
        <p>Contact us to get started or discuss how we can support you.</p>
        <Link className={styles.button} to='/contact/'>Contact Us</Link>
      </div>
    </Container>
  </div>
)

export default SupportCTA
