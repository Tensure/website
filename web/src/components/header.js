import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import logo from './images/header/tensure-logo-header.svg'
import logoDark from './images/header/tensure-logo-header-dark.svg'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, darkMode}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        {darkMode ? <Link to='/'><img src={logoDark} alt="Logo" /></Link> : <Link to='/'><img src={logo} alt="Logo" /></Link> }
      </div>

      <button className={cn(styles.toggleNavButton, darkMode && styles.darkMode)} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav, darkMode && styles.darkMode)}>
        <ul>
          <li>
            <Link to='/what-we-do/'>what we do</Link>
          </li>
          <li>
            <Link to='/who-we-are/'>who we are</Link>
          </li>
          <li>
            <Link to='/apprenticeships/'>apprenticeships</Link>
          </li>
          {/* <li>
            <Link to='/insights/'>insights</Link>
          </li> */}
          <li>
            <Link to='/contact/'>contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
