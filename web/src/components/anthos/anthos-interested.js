import React from "react";
import Container from "../container";

import styles from "./anthos-interested.module.css";

const anthosInterested = ({ data }) => {
  return (
    <div>
      {data.map(({ node: interested }) => (
        <div className={styles.rootFullWidth} id="interested" key={interested.id}>
          <Container>
            <div className={styles.interestedContent}>
              <h2>{interested.interestedTitle}</h2>
              <p>{interested.interestedDescription}</p>
              <form
                name="anthos"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you"
              >
                <input type="hidden" name="form-name" value="anthos" />
                <div className={styles.hidden}>
                  <input name="bot-field" />
                </div>
                <div className={styles.twoColFields}>
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    maxLength="30"
                    required
                  />
                  <input type="text" name="lname" placeholder="Last Name" maxLength="30" />
                </div>
                <input type="email" name="email" placeholder="Email" maxLength="50" required />
                <input type="text" name="company" placeholder="Company" maxLength="50" required />
                <textarea
                  name="message"
                  placeholder="Anything about your company’s cloud architecture you’d like us to know before we chat?"
                  maxLength="500"
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default anthosInterested;
