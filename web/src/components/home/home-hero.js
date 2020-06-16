import {Link} from 'gatsby'
import React from 'react'

import downArrow from '../images/home/hero-down-arrow.svg'
import greenStripe from '../images/home/hero-green-stripe.svg'
import blueStripe from '../images/home/hero-blue-stripe.svg'

import styles from './home-hero.module.css'

const HomeHero = () => (
  <div className={styles.twoColGrid}>
    <div className={styles.heroContentContainer}>
      <div className={styles.heroContent}>
        <h1>
        <span className={styles.subHeaderTurquoise}>Technology Supports</span>
        Everything</h1>
        <p>If you're building a process, creating a product, launching a company, or solving a business problem, you need solid footing. We design and create solutions to be that foundation for you—the right people, processes, and expertise in place to help move you past what’s blocking you and your team.</p>
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
        <iframe src="https://player.vimeo.com/video/426358103?background=1&muted=1&autoplay=1&loop=1&title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <div className={styles.blueStripe}>
        <img src={blueStripe} alt="Blue Stripe" />
      </div>
    </div>
  </div>
)

export default HomeHero
