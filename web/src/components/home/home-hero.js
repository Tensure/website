import React from 'react'
import {Link} from 'gatsby'
import PortableText from '../portableText'

import downArrow from '../images/home/hero-down-arrow.svg'
import greenStripe from '../images/home/hero-green-stripe.svg'
import blueStripe from '../images/home/hero-blue-stripe.svg'

import styles from './home-hero.module.css'

const HomeHero = ({data}) => {

  return (
    <div>
      {data.map(({ node: home }) => (
      <div className={styles.twoColGrid} key={home.id}>
        <div className={styles.heroContentContainer}>
          <div className={styles.heroContent}>
            <h1>
            <span className={styles.subHeaderTurquoise}>{home.heroSubtitle}</span>
            {home.heroTitle}</h1>
            <PortableText blocks={home._rawHeroDescription} />
            <Link className={styles.downArrow} to='#aboutUs'>
              <img src={downArrow} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className={styles.heroVidContainer}>
          <div className={styles.greenStripe}>
            <img src={greenStripe} alt="Green Stripe" />
          </div>
          <div className={styles.heroVid}>
            <iframe src={`${home.heroVideo}`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div className={styles.blueStripe}>
            <img src={blueStripe} alt="Blue Stripe" />
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default HomeHero
