import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewRecent (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.slice(0, 3).map(node => (
            <li key={node.id} datacat={node.categories[0].title}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

BlogPostPreviewRecent.defaultProps = {
  nodes: []
}

export default BlogPostPreviewRecent
