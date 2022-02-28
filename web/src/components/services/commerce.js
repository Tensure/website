import React from "react";
import PortableText from "../portableText";
import Container from "../container";

import styles from "./commerce.module.css";

function Commerce({ data }) {
  return (
    <div className={styles.rootFullWidth}>
      <Container>
        {data.map(({ node: commerce }) => (
          <div key={commerce.id}>
            <div className={styles.servicesTitleContent}>
              <p className={styles.subHeaderGreen}>{commerce.pageSubtitle}</p>
              <h2>{commerce.pageTitle}</h2>
            </div>

            <div className={styles.twoColGrid}>
              <div className={styles.commerceTitle}>
                <h2>{commerce.commerceTitle}</h2>
                <p className={styles.subHeaderGreen}>{commerce.commerceSubtitle}</p>
              </div>
              <div className={styles.commerceContent}>
                <PortableText blocks={commerce._rawcCmmerceDescription} />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Commerce;
