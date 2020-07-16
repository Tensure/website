import React, { useEffect } from 'react'
import PortableText from '../portableText'

import heroPlaceholder from '../images/home/hero-placeholder.jpg'
import downArrow from '../images/home/hero-down-arrow.svg'
import greenStripe from '../images/home/hero-green-stripe.svg'
import blueStripe from '../images/home/hero-blue-stripe.svg'
import greenStripeLg from '../images/home/hero-green-stripe-lg.svg'
import blueStripeLg from '../images/home/hero-blue-stripe-lg.svg'

import styles from './home-hero.module.css'

function HomeHero({data}) {

  useEffect(() => {
    let windowWidth = window.innerWidth;
    if( windowWidth > 768 ){
      function heroParallax() {
        let s = document.querySelector('[id*="heroFloater"]');
        let yPos = 0 - window.pageYOffset/8;
        s.style.top = 352 + yPos + "px";
      }

      window.addEventListener( 'scroll', heroParallax );

      return () => window.removeEventListener( 'scroll', heroParallax );
    }
  });

  return (
    <div>
      {data.map(({ node: home }) => (
      <div className={styles.twoColGrid} key={home.id}>
        <div className={styles.heroContentContainer} id={styles.heroFloater}>
          <div className={styles.heroContent}>
            <h1>
            <span className={styles.subHeaderTurquoise}>{home.heroSubtitle}</span>
            {home.heroTitle}</h1>
            <PortableText blocks={home._rawHeroDescription} />
            <a href="#aboutUs" className={styles.downArrow}>
              <img src={downArrow} alt="Logo" />
            </a>
          </div>
        </div>
        
        <div className={styles.heroVidContainer}>
          <div className={styles.greenStripe}>
            <img src={greenStripe} alt="Green Stripe" className={styles.stripeNormal} />
            <img src={greenStripeLg} alt="Green Stripe" className={styles.stripeLarge} />
          </div>
          <div className={styles.heroVid} style={{backgroundImage: `url(${heroPlaceholder})`}}>
            <iframe src={`${home.heroVideo}`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="hero background video"></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div className={styles.blueStripe}>
            <img src={blueStripe} alt="Blue Stripe" className={styles.stripeNormal} />
            <img src={blueStripeLg} alt="Blue Stripe" className={styles.stripeLarge} />
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default HomeHero
