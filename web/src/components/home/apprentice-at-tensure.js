import React, { useEffect } from "react";
import { Link } from "gatsby";
import PortableText from "../portableText";

import styles from "./apprentice-at-tensure.module.css";

function ApprenticeAtTensure({ data }) {
  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      function apprenticeParallax() {
        let s = document.querySelector('[id*="apprenticeFloater"]');
        let yPos = 0 - window.pageYOffset / 11;
        s.style.top = 225 + yPos + "px";
      }

      window.addEventListener("scroll", apprenticeParallax);

      return () => window.removeEventListener("scroll", apprenticeParallax);
    }
  });

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: apprentice }) => (
        <div className={styles.twoColGrid} key={apprentice.id}>
          <div
            className={styles.apprenticeImage}
            style={{ backgroundImage: `url(${apprentice.apprenticePhoto.asset.url})` }}
          />
          <div className={styles.apprenticeContent}>
            <div id={styles.apprenticeFloater}>
              <p className={styles.subHeaderGreen}>{apprentice.apprenticeSubtitle}</p>
              <h2>{apprentice.apprenticeTitle}</h2>
              <PortableText blocks={apprentice._rawApprenticeDescription} />
              <Link className={styles.button} to={`${apprentice.apprenticeUrl}`}>
                {apprentice.apprenticeButton}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApprenticeAtTensure;
