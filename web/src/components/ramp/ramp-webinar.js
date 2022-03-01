import React from 'react'
import {cn} from '../../lib/helpers'
import scrollTo from 'gatsby-plugin-smoothscroll'
import PortableText from '../portableText'

import rampBg from '../images/ramp/ramp-hero.jpg'

import styles from './ramp-webinar.module.css'

function RampWebinar ({data}) {
  return (
    <div className={styles.rootFullWidth}>
      {data.map(({node: webinar}) => (
        <div className={styles.webinarContainer} key={webinar.id}>
          <div className={styles.webinarBg} style={{backgroundImage: `url(${rampBg})`}} />
          <div className={styles.webinarContent}>
            <div>
              <p className={styles.subHeaderGreen}>{webinar.webinarSubtitle}</p>
              <h2>{webinar.webinarTitle}</h2>
              <div className={styles.webinarDescription}>
                <PortableText blocks={webinar._rawWebinarDescription} />
              </div>
              <a
                onClick={() => scrollTo('#register')}
                className={cn(styles.button, styles.scheduleBtn)}
              >
                {webinar.webinarButton}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RampWebinar
