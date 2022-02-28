import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import ApplicationDevelopment from '../components/ad/ad'

const Anthos = (props) => {
  const {data} = props
  const siteSeo = (data || {}).siteSeo

  return (
    <Layout darkMode>
      <SEO title={siteSeo.seoTitle} description={siteSeo.seoDescription} />
      <ApplicationDevelopment data={data.overview.edges} />
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
  }
`

export default Anthos
