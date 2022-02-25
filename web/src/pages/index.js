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

const IndexPage = (props) => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const siteSeo = (data || {}).siteSeo
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  return (
    <Layout>
      <SEO title={siteSeo.seoTitle} description={siteSeo.seoDescription} keywords={site.keywords} />
      <HomeHero data={data.home.edges} />
      <AboutUs data={data.home.edges} />
      <Services data={data.home.edges} />
      <ApprenticeAtTensure data={data.home.edges} />
      <Container>
        <p className={styles.subHeader}>Goings-on at Tensure</p>
        <h2>News & Insights</h2>
        {postNodes && <BlogPostPreviewRecent nodes={postNodes} />}
      </Container>
      <SupportCTA data={data.support.edges} />
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    siteSeo: sanityHome {
      seoTitle
      seoDescription
      seoURL
      seoPhoto {
        alt
        asset {
          url
        }
      }
    }
    posts: allSanityPost(
      limit: 3
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
    home: allSanityHome(limit: 1) {
      edges {
        node {
          servicesUrl
          servicesTitle
          servicesSubtitle
          servicesButton
          id
          heroTitle
          heroSubtitle
          heroVideo
          apprenticeUrl
          apprenticeTitle
          apprenticeSubtitle
          apprenticeButton
          aboutUrl
          aboutTitle
          aboutSubtitle
          aboutButton
          _rawServicesDescription(resolveReferences: {maxDepth: 10})
          _rawHeroDescription(resolveReferences: {maxDepth: 10})
          _rawApprenticeDescription(resolveReferences: {maxDepth: 10})
          _rawAboutDescription(resolveReferences: {maxDepth: 10})
          servicesPhoto {
            alt
            asset {
              url
            }
          }
          apprenticePhoto {
            alt
            asset {
              url
            }
          }
          aboutPhoto {
            alt
            asset {
              url
            }
          }
          seoTitle
          seoURL
          seoPhoto {
            alt
            asset {
              url
            }
          }
          seoDescription
        }
      }
    }
    support: allSanitySupport(limit: 1) {
      edges {
        node {
          supportTitle
          supportSubtitle
          supportButton
          id
          supportUrl
          supportImage {
            alt
            asset {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
