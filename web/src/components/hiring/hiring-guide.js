import React from "react";
import Container from "../container";

import styles from "./hiring-guide.module.css";

const hiringGuide = ({ data }) => {
  return (
    <div>
      {data.map(({ node: download }) => (
        <div className={styles.rootFullWidth} id="download" key={download.id}>
          <Container>
            <div className={styles.downloadContent}>
              <h2>{download.downloadTitle}</h2>
              <p>{download.downloadDescription}</p>
              <form
                name="guide"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you-hiring-guide"
              >
                <input type="hidden" name="form-name" value="guide" />
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
                <button type="submit">Get The Guide</button>
              </form>
            </div>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default hiringGuide;
