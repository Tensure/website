import React from 'react'
import anthosVidBg from '../images/anthos/anthos-vid-bg.jpg'
import Video from '../video.jsx'
import styles from './ad.module.css'
import adGoogleImg from '../images/ad_googleimage.png'

export default function ApplicationDevelopment ({data}) {
  return (
    <div className={styles.rootFullWidth}>
      {data.map(({node: cloud}) => (
        <div className={styles.cloudContainer} key={cloud.id}>
          <div className={styles.adImage} style={{backgroundImage: `url(${anthosVidBg})`}}>
            <Video videoSrc={cloud.heroVideo} videoTitle={cloud.heroTitle} />
          </div>
          <div className={styles.cloudContent}>
            <div>
              <img src={adGoogleImg} width='100' height='100' />
              <p className={styles.subHeaderGreen}>{cloud.overviewSubtitle}</p>
              <h2>{cloud.overviewTitle}</h2>
              <p className={styles.overviewDescription}>{cloud.overviewDescription}</p>
              {cloud.overviewUrl1}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
