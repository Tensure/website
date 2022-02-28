import React, { useEffect } from "react";

import styles from "./single-purpose.module.css";

function SinglePurpose({ data }) {
  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      function purposeParallax() {
        let s = document.querySelector('[id*="purposeFloater"]');
        let s2 = document.querySelector('[id*="purpose2Floater"]');
        let yPos = 0 - window.pageYOffset / 7;
        s.style.top = 75 + yPos + "px";
        s2.style.top = 150 + yPos + "px";
      }

      window.addEventListener("scroll", purposeParallax);

      return () => window.removeEventListener("scroll", purposeParallax);
    }
  });

  return (
    <div>
      {data.map(({ node: section1 }) => (
        <div className={styles.singlePurposeContainer} key={section1.id}>
          <div className={styles.twoColGrid}>
            <div className={styles.singlePurposeContent}>
              <div id={styles.purposeFloater}>
                <p className={styles.subHeaderGreen}>{section1.subtitle}</p>
                <h2>{section1.title}</h2>
                <p>{section1.paragraph1}</p>
              </div>
            </div>
            <div
              className={styles.singlePurposeImage}
              style={{ backgroundImage: `url(${section1.photo1.asset.url})` }}
            />
          </div>
          <div className={styles.twoColGrid}>
            <div
              className={styles.fullTeamImage}
              style={{ backgroundImage: `url(${section1.photo2.asset.url})` }}
            />
            <div className={styles.fullTeamContent}>
              <div id={styles.purpose2Floater}>
                <p>{section1.paragraph2}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SinglePurpose;
