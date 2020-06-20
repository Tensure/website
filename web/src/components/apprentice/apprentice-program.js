import React from 'react'
import {Link} from 'gatsby'
import PortableText from '../portableText'
import apprenticeProgram from '../images/apprentice/apprentice-program.jpg'

import styles from './apprentice-program.module.css'

const ApprenticeProgram = ({data}) => {

  return (
    <div className={styles.rootFullWidth}>
      {data.map(({ node: program }) => (
        <div className={styles.twoColGrid} key={program.id}>
          <div className={styles.apprenticeProgramImage} style={{backgroundImage: `url(${program.programPhoto.asset.url})`}}></div>
          <div className={styles.apprenticeProgramContent}>
            <h2>{program.programTitle}</h2>
            <p className={styles.subHeaderGreen}>{program.programSubtitle}</p>
            <PortableText blocks={program._rawProgramDescription} />
            <Link className={styles.button} to={`${program.programUrl}`}>{program.programButton}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ApprenticeProgram