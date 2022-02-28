import React from 'react'
import Container from '../container'

import styles from './ramp-register.module.css'

const rampRegister = ({data}) => {
  return (
    <div>
      {data.map(({node: register}) => (
        <div className={styles.rootFullWidth} id='register' key={register.id}>
          <Container>
            <div className={styles.registerContent}>
              <h2>{register.registerTitle}</h2>
              <p>{register.registerDescription}</p>
              <form
                name='ramp'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                action='/thank-you-ramp'
              >
                <input type='hidden' name='form-name' value='ramp' />
                <div className={styles.hidden}>
                  <input name='bot-field' />
                </div>
                <div className={styles.twoColFields}>
                  <input
                    type='text'
                    name='fname'
                    placeholder='First Name'
                    maxLength='30'
                    required
                  />
                  <input type='text' name='lname' placeholder='Last Name' maxLength='30' />
                </div>
                <input type='email' name='email' placeholder='Email' maxLength='50' required />
                <input type='text' name='company' placeholder='Company' maxLength='50' required />
                <button type='submit'>Register</button>
              </form>
            </div>
          </Container>
        </div>
      ))}
    </div>
  )
}

export default rampRegister
