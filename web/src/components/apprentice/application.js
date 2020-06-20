import React from 'react'
import PortableText from '../portableText'
import Container from '../container'
import background from '../images/apprentice/applying-cta-bg.jpg'

import styles from './application.module.css'

const Application = ({data}) => {

  return (
    <div>
      {data.map(({ node: application }) => (
        <div className={styles.rootFullWidth} style={{backgroundImage: `url(${application.applicationPhoto.asset.url})`}} id="application" key={application.id}>
          <Container>
              <div className={styles.applicationContent}>
                <h2>{application.applicationTitle}</h2>
                <p>{application.applicationSubtitle}</p>
                <form name="application" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you">
                  <input type="hidden" name="form-name" value="application" />
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
      ))}
    </div>
  )
}

export default Application
