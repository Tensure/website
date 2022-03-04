import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from '../blog-post-preview'
import styles from './customer-success.module.css'
import anthosImage from '../images/link_image_anthos.svg'
export default function CustomerStories (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        <li>
          <Link to='/anthos' className={styles.inGrid}>
            <div className={styles.insightContainer}>
              <p className={styles.category}>AD Content</p>
              <div className={styles.date}>03-01-2022</div>
              <h3 className={styles.title}>Anthos At Tensure</h3>
              <img className={styles.anImg} src={anthosImage} alt='Google Anthos' />
              <p className={styles.readMore}>go to anthos</p>
            </div>
          </Link>
        </li>
        {props.nodes &&
          props.nodes.slice(0, 5).map((node) => (
            <li key={node.id} datacat={node.categories[0].title}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

CustomerStories.defaultProps = {
  nodes: []
}
