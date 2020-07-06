import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'

import Layout from '../containers/layout'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import SEO from '../components/seo'
import TensureMinds from '../components/about/tensure-minds'

import styles from '../components/layout.module.css'

const ArchivePage = props => {
  const {data} = props

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title='News & Insights' />
      <Container>
        <p className={styles.subHeader}>Goings-on at Tensure</p>
        <h1>News & Insights</h1>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          categories {
            id
            title
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

export default ArchivePage
