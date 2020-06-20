import React from 'react'
import PortableText from '../portableText'

import styles from './leadership.module.css'

const Leadership = ({data}) => (

  <div className={styles.grid}>
    <div className={styles.teamTitle}>
      <p className={styles.subHeaderGreen}>leadership</p>
      <h2>Team</h2>
    </div>
    <div className={styles.teamMembers}>
      <ul>
      {data.map(({ node: leader }) => (
        <li key={leader.id}>
          <div className={styles.teamMemberBox} style={{backgroundImage: `url(${leader.image.asset.url})`}} alt={leader.image.alt}>
            <div className={styles.teamMemberBio}>
              <PortableText blocks={leader._rawBio} />
              <p>
                <a href={`${leader.linkedin}`} target="_blank">Linkedin</a><br />
                <a href={`${leader.email}`}>Email</a>
              </p>
            </div>
          </div>
          <div className={styles.teamMemberName}>
            <h3>{leader.name}</h3>
          </div>
        </li>
      ))}
      </ul>
    </div>
  </div>
)

export default Leadership
