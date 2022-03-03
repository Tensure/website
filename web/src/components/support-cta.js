import React from 'react'
import {Link} from 'gatsby'
import Container from '../components/container'

import styles from './support-cta.module.css'

const SupportCTA = ({data}) => {
  return (
    <div>
      {data.map(({node: support}) => (
        <div
          className={styles.rootFullWidth}
          style={{backgroundImage: `url(${support.supportImage.asset.url})`}}
          key={support.id}
        >
          <Container>
            <div className={styles.supportContent}>
              <h2>{support.supportTitle}</h2>
              <p>{support.supportSubtitle}</p>
              <Link className={styles.button} to={`${support.supportUrl}`}>
                {support.supportButton}
              </Link>
            </div>
          </Container>
        </div>
      ))}
    </div>
  )
}

export default SupportCTA
