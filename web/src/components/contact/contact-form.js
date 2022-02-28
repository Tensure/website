import React from "react";
import Container from "../container";

import styles from "./contact-form.module.css";

const ContactForm = ({ data }) => {
  return (
    <div className={styles.rootFullWidth}>
      <Container>
        {data.map(({ node: contact }) => (
          <div className={styles.contactContent} key={contact.id}>
            <h2>{contact.contactTitle}</h2>
            <p>{contact.contactSubtitle}</p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.hidden}>
                <input name="bot-field" />
              </div>
              <div className={styles.twoColFields}>
                <input type="text" name="fname" placeholder="First Name" maxLength="30" required />
                <input type="text" name="lname" placeholder="Last Name" maxLength="30" />
              </div>
              <div className={styles.twoColFields}>
                <input type="email" name="email" placeholder="Email" maxLength="50" required />
                <input type="text" name="phone" placeholder="Phone" maxLength="16" />
              </div>
              <input type="text" name="company" placeholder="Company" maxLength="50" />
              <textarea name="message" placeholder="How can we help you?" maxLength="500" />
              <button type="submit">Submit</button>
            </form>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ContactForm;
