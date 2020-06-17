import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'

import Layout from '../containers/layout'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import HomeHero from '../components/home/home-hero'
import AboutUs from '../components/home/about-us'
import Services from '../components/home/services'
import ApprenticeAtTensure from '../components/home/apprentice-at-tensure'
import BlogPostPreviewRecent from '../components/blog-post-preview-recent'
import SupportCTA from '../components/support-cta'

import styles from '../components/layout.module.css'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
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

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  document.body.classList.add(site.title);

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <HomeHero />
      <AboutUs />
      <Services />
      <ApprenticeAtTensure />
      {/* Recent Posts */}
      <Container>
        <p className={styles.subHeader}>Goings-on at Tensure</p>
        <h2>News & Insights</h2>
        {postNodes && (
          <BlogPostPreviewRecent
            nodes={postNodes}
          />
        )}
      </Container>
      <SupportCTA />
    </Layout>
  )
}

export default IndexPage
