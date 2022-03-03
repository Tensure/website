import {format} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {getBlogUrl} from '../lib/helpers'
import PortableText from './portableText'
import styles from './blog-post-preview.module.css'

function BlogPostPreview (props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.insightContainer}>
        {props.categories.map((category) => (
          <p className={styles.category} key={category.id}>
            {category.title}
          </p>
        ))}
        <div className={styles.date}>{format(props.publishedAt, 'MM-DD-YYYY')}</div>
        <h3 className={styles.title}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <p className={styles.readMore}>read more</p>
      </div>
    </Link>
  )
}

export default BlogPostPreview
