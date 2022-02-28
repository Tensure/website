import React from 'react'
import Container from '../container'
import arrows from '../images/about/blue-arrow-left.svg'
import avatar from '../images/about/lauren-avatar.png'

import styles from './tensure-minds.module.css'

const TensureMinds = () => (
  <div className={styles.rootFullWidth}>
    <Container>
      <div className={styles.twoColGrid}>
        <div className={styles.question}>
          <p className={styles.subHeader}>thoughts from the</p>
          <h2>Minds Of Tensure</h2>
          <div className={styles.questionContent}>
            <p>
              What is the best starter language for an aspiring developer to begin their journey in
              this profession?
            </p>
          </div>
          <div className={styles.arrows}>
            <a href='#'>
              <img src={arrows} alt='Left Blue Arrow' />
            </a>
            <a href='#'>
              <img src={arrows} alt='Left Blue Arrow' />
            </a>
          </div>
        </div>
        <div className={styles.answers}>
          <ul>
            <li style={{backgroundImage: `url(${avatar})`}}>
              <p className={styles.personName}>Louie Hauss</p>
              <p className={styles.personTitle}>Director of Barketing</p>
              <p className={styles.personContent}>
                Python is definitely a really good starter language, and pretty easy to pick up. I'm
                pretty sweet at code and I found that starting with Python was a good move.
              </p>
            </li>

            <li style={{backgroundImage: `url(${avatar})`}}>
              <p className={styles.personName}>Louie Hauss</p>
              <p className={styles.personTitle}>Director of Barketing</p>
              <p className={styles.personContent}>
                Python is definitely a really good starter language, and pretty easy to pick up. I'm
                pretty sweet at code and I found that starting with Python was a good move.
              </p>
            </li>

            <li style={{backgroundImage: `url(${avatar})`}}>
              <p className={styles.personName}>Louie Hauss</p>
              <p className={styles.personTitle}>Director of Barketing</p>
              <p className={styles.personContent}>
                Python is definitely a really good starter language, and pretty easy to pick up. I'm
                pretty sweet at code and I found that starting with Python was a good move.
              </p>
            </li>
          </ul>
          <ul className={styles.paginationBullets}>
            <li />
            <li className={styles.active} />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </Container>
  </div>
)

export default TensureMinds
