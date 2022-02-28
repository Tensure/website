import React from "react";
import { cn } from "../../lib/helpers";

import anthosVidBg from "../images/anthos/anthos-vid-bg.jpg";
import Video from "../video.jsx";

import styles from "./anthos-cloud.module.css";

function AnthosCloud({ data }) {
  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: cloud }) => (
        <div className={styles.cloudContainer} key={cloud.id}>
          <div className={styles.cloudVideo} style={{ backgroundImage: `url(${anthosVidBg})` }}>
            <Video videoSrc={cloud.heroVideo} videoTitle={cloud.heroTitle} />
          </div>
          <div className={styles.cloudContent}>
            <div>
              <p className={styles.subHeaderGreen}>{cloud.overviewSubtitle}</p>
              <h2>{cloud.overviewTitle}</h2>
              <p className={styles.overviewDescription}>{cloud.overviewDescription}</p>
              {cloud.overviewUrl1}
              <div className={styles.popupBtn}>
                <a href="#" className={cn(styles.button, styles.buttonGreen)}>
                  {cloud.overviewButton1}
                </a>
              </div>
              {/* <a href={cloud.overviewUrl2} className={cn(styles.button, styles.scheduleBtn)}>{cloud.overviewButton2}</a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnthosCloud;
