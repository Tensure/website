import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import ApplicationDevelopment from '../components/ad/ad'
import CustomerStories from '../components/customer-success/CustomerStories'
import {mapEdgesToNodes} from '../lib/helpers'
import Container from '../components/container'
import styles from '../components/layout.module.css'

export default function AppDev (props) {
  const {data} = props
  const siteSeo = (data || {}).siteSeo
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout darkMode>
      <SEO title={siteSeo.seoTitle} description={siteSeo.seoDescription} />
      <ApplicationDevelopment data={data.overview.edges} />
      <Container>
        <p className={styles.subHeader}>Read about our successes</p>
        <h1>Success Stories</h1>
        {postNodes && postNodes.length && <CustomerStories nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ADQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    siteSeo: sanityAd {
      seoURL
      seoTitle
      seoDescription
      seoPhoto {
        alt
        asset {
          url
        }
      }
    }
    overview: allSanityAd(limit: 1) {
      edges {
        node {
          seoTitle
          seoURL
          seoPhoto {
            alt
            asset {
              url
            }
          }
          seoDescription
          overviewTitle
          overviewSubtitle
          overviewDescription
          id
        }
      }
    }
    posts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
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
