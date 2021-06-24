import React from 'react'
import Container from '../container'

import styles from './careers.module.css'

const Careers = ({data}) => {

  return (
    <div className={styles.rootFullWidth}>
      <Container>
        <div id="grnhse_app"></div>
      </Container>
      <script src="https://boards.greenhouse.io/embed/job_board/js?for=tensureconsulting"></script>
    </div>
  )
}

export default Careers
