import React from 'react'
import bizcards from '../images/about/who-bizcards.jpg'
import team from '../images/about/who-team-photo.jpg'

import styles from './single-purpose.module.css'

const SinglePurpose = () => (
  <div className={styles.singlePurposeContainer}>
    <div className={styles.twoColGrid}>
      <div className={styles.singlePurposeContent}>
        <p className={styles.subHeaderGreen}>founded with a</p>
        <h2>Single Purpose</h2>
        <p>We started Tensure with one main purpose—to provide freedom. We carry this purpose through to all aspects of our company and all relationships that we build. For our clients, that means freedom from processes that waste time and slow things down. More freedom to spend time working on the things that are important and fun. For our employees, that means freedom to organize their work life the way that works for them. For our apprentices, freedom that can lead to growth and opportunities for them and their families.</p>
      </div>
      <div className={styles.singlePurposeImage} style={{backgroundImage: `url(${bizcards})`}}></div>
    </div>

    <div className={styles.twoColGrid}>
      <div className={styles.fullTeamImage} style={{backgroundImage: `url(${team})`}}></div>
      <div className={styles.fullTeamContent}>
        <p>Tensure was founded by a group of four people who have spent their careers working in IT Services. In 2019, Matt, Dan, Justin and Doug were all ready to step out on their own and had a decision to make—either be competitors forever, or come together and create a behemoth that would someday take over the development world. You see where this is going, don't you? You called it—Tensure was born. We're now a company of over 15 developers and we’re well on our way to building a lair in a hollowed out volcano.</p>
      </div>
    </div>
  </div>
)

export default SinglePurpose
