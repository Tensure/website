import React from 'react'
import {cn} from '../../lib/helpers'
import scrollTo from 'gatsby-plugin-smoothscroll'

import hiringBg from '../images/hiring/hiring-guide-hero.jpg'

import styles from './hiring-talent.module.css'

function hiringTalent ({data}) {
  return (
    <div className={styles.rootFullWidth}>
      {data.map(({node: talent}) => (
        <div className={styles.talentContainer} key={talent.id}>
          <div className={styles.talentVideo} style={{backgroundImage: `url(${hiringBg})`}} />
          <div className={styles.talentContent}>
            <div>
              <p className={styles.subHeaderGreen}>{talent.overviewSubtitle}</p>
              <h2>{talent.overviewTitle}</h2>
              <p className={styles.overviewDescription}>{talent.overviewDescription}</p>
              <a
                onClick={() => scrollTo('#download')}
                className={cn(styles.button, styles.buttonGreen)}
              >
                {talent.overviewButton}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default hiringTalent
