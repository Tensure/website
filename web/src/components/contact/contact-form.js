import React from 'react'
import Container from '../container'

import styles from './contact-form.module.css'

const ContactForm = () => (
  <div className={styles.rootFullWidth}>
    <Container>
      <div className={styles.contactContent}>
        <h2>Contact Us</h2>
        <p>Please fill out the form below and we will be in touch.</p>
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you">
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.hidden}><input name="bot-field" /></div>
          <div className={styles.twoColFields}>
            <input type="text" name="fname" placeholder="First Name" required />
            <input type="text" name="lname" placeholder="Last Name" />
          </div>
          <div className={styles.twoColFields}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone" placeholder="Phone" />
          </div>
          <input type="text" name="company" placeholder="Company" />
          <textarea name="message" placeholder="How can we help you?"></textarea> 
          <button type="submit">Submit</button>
        </form>
      </div>
    </Container>
  </div>
)

export default ContactForm
