import React from 'react'
import Header from './header'
import { Link } from 'gatsby'

import '../styles/layout.css'
import styles from './layout.module.css'

import tensureLogo from './images/footer/footer-tensure-icon.svg'
import googleCloud from './images/footer/footer-google-cloud.png'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, darkMode }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} darkMode={darkMode} />

    <div className={styles.content}>{children}</div>

    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <ul className={styles.footerGrid}>
          <li>
            <div className={styles.footerLogo}>
              <img src={tensureLogo} alt="Tensure Logo" />
              <a href="mailto:hello@tensure.io">hello@tensure.io</a>
            </div>
            <div className={styles.footerSocial}>
              <ul>
                <li>
                  <a href="https://www.facebook.com/TensureIO" target="_blank" rel="noopener">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/TensureIO" target="_blank" rel="noopener">Twitter</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/tensureio/about" target="_blank" rel="noopener">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/tensure.io" target="_blank" rel="noopener">Instagram</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles.footerLinks}>
              <ul>
                <li>
                  <Link to='/what-we-do/'>What We Do</Link>
                </li>
                <li>
                  <Link to='/who-we-are/'>Who We Are</Link>
                </li>
                <li>
                  <Link to='/apprenticeships/'>Apprenticeships</Link>
                </li>
                {/* <li>
                  <Link to='/insights/'>Insights</Link>
                </li> */}
                <li>
                  <Link to='/contact/'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerGoogle}>
              <a href="https://cloud.google.com/" target="_blank" rel="noopener">
                <img src={googleCloud} alt="Google Cloud Logo" />
              </a>
            </div>
          </li>
        </ul>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()} Tensure. All Rights Reserved. <span className={styles.divider}>|</span> <span><a href='/privacy-policy/'>Privacy Policy</a></span> <span><a href='/terms-of-use/'>Terms Of Use</a></span>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
