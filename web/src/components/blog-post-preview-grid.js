import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id} datacat={node.categories[0].title}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  nodes: []
}

export default BlogPostPreviewGrid
