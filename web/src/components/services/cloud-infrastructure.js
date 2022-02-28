import React from "react";
import PortableText from "../portableText";
import Container from "../container";

import styles from "./cloud-infrastructure.module.css";

const CloudInfrastructure = ({ data }) => {
  return (
    <div className={styles.rootFullWidth}>
      <Container>
        {data.map(({ node: cloud }) => (
          <div className={styles.twoColGrid} key={cloud.id}>
            <div className={styles.infrastructureTitle}>
              <h2>{cloud.cloudTitle}</h2>
              <p className={styles.subHeaderWhite}>{cloud.cloudSubtitle}</p>
            </div>
            <div className={styles.infrastructureContent}>
              <PortableText blocks={cloud._rawCloudDescription} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default CloudInfrastructure;
