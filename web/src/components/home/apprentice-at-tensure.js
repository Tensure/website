import React from 'react'
import {Link} from 'gatsby'
import PortableText from '../portableText'

import styles from './apprentice-at-tensure.module.css'

const ApprenticeAtTensure = ({data}) => {

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: apprentice }) => (
        <div className={styles.twoColGrid} key={apprentice.id}>
          <div className={styles.apprenticeImage} style={{backgroundImage: `url(${apprentice.apprenticePhoto.asset.url})`}}></div>
          <div className={styles.apprenticeContent}>
            <p className={styles.subHeaderGreen}>{apprentice.apprenticeSubtitle}</p>
            <h2>{apprentice.apprenticeTitle}</h2>
            <PortableText blocks={apprentice._rawApprenticeDescription} />
            <Link className={styles.button} to={`${apprentice.apprenticeUrl}`}>{apprentice.apprenticeButton}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ApprenticeAtTensure
