import React from 'react'
import {cn} from '../../lib/helpers'

import anthosVidBg from '../images/anthos/anthos-vid-bg.jpg'
import anthosPlayBtn from '../images/anthos/play-button.svg'

import styles from './anthos-cloud.module.css'

function AnthosCloud({data}) {

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: cloud }) => (
        <div className={styles.cloudContainer} key={cloud.id}>
          <div className={styles.cloudVideo} style={{backgroundImage: `url(${anthosVidBg})`}}>
            <div className={styles.popupPlayBtn}>
              <span
                className='wistia_embed wistia_async_02n68rjpjf popover=true popoverContent=link'
                style={{position: 'relative', display: 'inline-block', width: '144px', height: '88px'}}
              >
                <a href='#'>
                  <img className={styles.anthosPlayBtn} src={anthosPlayBtn} alt="Play Button" />
                </a>
              </span>
            </div>
          </div>
          <div className={styles.cloudContent}>
            <div>
              <p className={styles.subHeaderGreen}>{cloud.overviewSubtitle}</p>
              <h2>{cloud.overviewTitle}</h2>
              <p className={styles.overviewDescription}>{cloud.overviewDescription}</p>
              {cloud.overviewUrl1}
              <div className={styles.popupBtn}>
                <span
                  className='wistia_embed wistia_async_02n68rjpjf popover=true popoverContent=link'
                  style={{position: 'relative', display: 'inline'}}
                >
                  <a href="#" className={cn(styles.button, styles.buttonGreen)}>{cloud.overviewButton1}</a>
                </span>
              </div>
              <a href={cloud.overviewUrl2} className={cn(styles.button, styles.scheduleBtn)}>{cloud.overviewButton2}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnthosCloud