import React from 'react'
import {graphql} from 'gatsby'

import justin from '../images/about/who-justin.jpg'
import matt from '../images/about/who-matt.jpg'
import dan from '../images/about/who-dan.jpg'
import doug from '../images/about/who-doug.jpg'

import styles from './leadership.module.css'

// export const query = graphql`
//   query TeamMembers {
//     leaders: allTeamMembers(
//       limit: 3
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//     ) {
//       edges {
//         node {
//           id
//           title
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

function Leadership (props) {
  const { teamMembers} = props

  return (
    <div className={styles.grid}>
      <div className={styles.teamTitle}>
        <p className={styles.subHeaderGreen}>leadership</p>
        <h2>Team</h2>
      </div>
      <div className={styles.teamMembers}>
        <ul>
        {/* {teamMembers.map(teamMember => (
          <li key={teamMember._id}>{teamMember.title}</li>
        ))} */}
        <li>
          <div className={styles.teamMemberBox} style={{backgroundImage: `url(${justin})`}}>
            <div className={styles.teamMemberBio}>
              <p>Justin's many years of experience in the IT Services industry has provided him valuable exposure to many different industries , business lines, and technologies. Justin's experience includes leading global delivery teams, acting as a technology adviser, and building out technology partnerships. Justin, his wife, and two boys enjoy experiencing new cultures through travel.</p>
              <p>
                <a href="#">Linkedin</a><br />
                <a href="#">Email</a>
              </p>
            </div>
          </div>
          <div className={styles.teamMemberName}>
            <h3>Justin Billig</h3>
          </div>
        </li>
        <li>
          <div className={styles.teamMemberBox} style={{backgroundImage: `url(${matt})`}}>
            <div className={styles.teamMemberBio}>
              <p>Justin's many years of experience in the IT Services industry has provided him valuable exposure to many different industries , business lines, and technologies. Justin's experience includes leading global delivery teams, acting as a technology adviser, and building out technology partnerships. Justin, his wife, and two boys enjoy experiencing new cultures through travel.</p>
              <p>
                <a href="#">Linkedin</a><br />
                <a href="#">Email</a>
              </p>
            </div>
          </div>
          <div className={styles.teamMemberName}>
            <h3>Matt Young</h3>
          </div>
        </li>
        <li>
          <div className={styles.teamMemberBox} style={{backgroundImage: `url(${dan})`}}>
            <div className={styles.teamMemberBio}>
              <p>Justin's many years of experience in the IT Services industry has provided him valuable exposure to many different industries , business lines, and technologies. Justin's experience includes leading global delivery teams, acting as a technology adviser, and building out technology partnerships. Justin, his wife, and two boys enjoy experiencing new cultures through travel.</p>
              <p>
                <a href="#">Linkedin</a><br />
                <a href="#">Email</a>
              </p>
            </div>
          </div>
          <div className={styles.teamMemberName}>
            <h3>Dan Rye</h3>
          </div>
        </li>
        <li>
          <div className={styles.teamMemberBox} style={{backgroundImage: `url(${doug})`}}>
            <div className={styles.teamMemberBio}>
              <p>Justin's many years of experience in the IT Services industry has provided him valuable exposure to many different industries , business lines, and technologies. Justin's experience includes leading global delivery teams, acting as a technology adviser, and building out technology partnerships. Justin, his wife, and two boys enjoy experiencing new cultures through travel.</p>
              <a href="#">Linkedin</a><br />
              <a href="#">Email</a>
            </div>
          </div>
          <div className={styles.teamMemberName}>
            <h3>Doug Shannon</h3>
          </div>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Leadership