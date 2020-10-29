import React from 'react'
import PortableText from '../portableText'
import {cn} from '../../lib/helpers'

import anthosVidBg from '../images/anthos/anthos-vid-bg.jpg'
import anthosPlayBtn from '../images/anthos/play-button.svg'

import styles from './anthos-cloud.module.css'

function AnthosCloud({data}) {

  // useEffect(() => {
  //   let windowWidth = window.innerWidth;
  //   if( windowWidth > 768 ){
  //     function cloudParallax() {
  //       let s = document.querySelector('[id*="cloudFloater"]');
  //       let yPos = 0 - window.pageYOffset/7;
  //       s.style.top = 0 + yPos + "px";
  //     }

  //     window.addEventListener( 'scroll', cloudParallax );

  //     return () => window.removeEventListener( 'scroll', cloudParallax );
  //   }
  // });

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: cloud }) => (
        <div className={styles.cloudContainer} key={cloud.id}>
          <div className={styles.cloudVideo} style={{backgroundImage: `url(${anthosVidBg})`}}>
            <div className={styles.popupPlayBtn}>
              <span className="wistia_embed" wistia_async_02n68rjpjf="true" popover="true" popovercontent="link" style={{position: 'relative'}}>
                <a href="#"><img className={styles.anthosPlayBtn} src={anthosPlayBtn} alt="Play Button" /></a>
              </span>
            </div>
          </div>
          <div className={styles.cloudContent}>
            <div>
              <p className={styles.subHeaderGreen}>{cloud.overviewSubtitle}</p>
              <h2>{cloud.overviewTitle}</h2>
              <p className={styles.overviewDescription}>{cloud.overviewDescription}</p>
              {cloud.overviewUrl1}
              {/* <PortableText blocks={cloud._rawOverviewVideoButton} /> */}
              <div className={styles.popupBtn}>
                <span className="wistia_embed" wistia_async_02n68rjpjf="true" popover="true" popovercontent="link" style={{position: 'relative', display: 'inline'}}>
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