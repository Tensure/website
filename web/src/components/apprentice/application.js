import React from 'react'
import Container from '../container'
import background from '../images/apprentice/applying-cta-bg.jpg'

import styles from './application.module.css'

const Application = () => (
  <div className={styles.rootFullWidth} style={{backgroundImage: `url(${background})`}} id="application">
    <Container>
      <div className={styles.applicationContent}>
        <h2>Interested in applying?</h2>
        <p>Please fill out the form below and we will be in touch.</p>
        <form name="application" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="thank-you">
          <div className={styles.hidden}><input name="bot-field" /></div>
          <div className={styles.twoColFields}>
            <input type="text" name="fname" placeholder="First Name" required />
            <input type="text" name="lname" placeholder="Last Name" />
          </div>
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Why the interest in the apprenticeship progam?"></textarea> 
          <button type="submit">Submit</button>
        </form>
      </div>
    </Container>
  </div>
)

export default Application
