import React, { useEffect } from "react";
import PortableText from "../portableText";

import styles from "./leadership.module.css";

function Leadership({ data }) {
  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      function leadershipParallax() {
        let s = document.querySelector('[id*="leadershipFloater"]');
        let yPos = 0 - window.pageYOffset / 8;
        s.style.top = 100 + yPos + "px";
      }

      window.addEventListener("scroll", leadershipParallax);

      return () => window.removeEventListener("scroll", leadershipParallax);
    }
  });

  return (
    <div className={styles.grid}>
      <div className={styles.teamTitle}>
        <p className={styles.subHeaderGreen}>leadership</p>
        <h2>Team</h2>
      </div>
      <div className={styles.teamMembers}>
        <div id={styles.leadershipFloater}>
          <ul>
            {data.map(({ node: leader }) => (
              <li key={leader.id}>
                <div
                  className={styles.teamMemberBox}
                  style={{ backgroundImage: `url(${leader.image.asset.url})` }}
                  alt={leader.image.alt}
                >
                  <div className={styles.teamMemberBio}>
                    <PortableText blocks={leader._rawBio} />
                    <p>
                      <a href={`${leader.linkedin}`} target="_blank" rel="no-referrer">
                        Linkedin
                      </a>
                      <br />
                      <a href={`mailto:${leader.email}`}>Email</a>
                    </p>
                  </div>
                </div>
                <div className={styles.teamMemberName}>
                  <h3>{leader.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
