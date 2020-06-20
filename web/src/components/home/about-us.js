import React from 'react'
import {Link} from 'gatsby'
import PortableText from '../portableText'

import styles from './about-us.module.css'

const AboutUs = ({data}) => {

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: about }) => (
        <div className={styles.twoColGrid} id='aboutUs'>
          <div className={styles.aboutUsImage} style={{backgroundImage: `url(${about.aboutPhoto.asset.url})`}}></div>
          <div className={styles.aboutUsContent}>
            <p className={styles.subHeaderGreen}>{about.aboutSubtitle}</p>
            <h2>{about.aboutTitle}</h2>
            <PortableText blocks={about._rawAboutDescription} />
            <Link className={styles.button} to={`${about.aboutUrl}`}>{about.aboutButton}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AboutUs
