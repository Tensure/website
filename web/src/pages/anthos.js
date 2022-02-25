import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import AnthosCloud from '../components/anthos/anthos-cloud'
import AnthosInterested from '../components/anthos/anthos-interested'

const Anthos = (props) => {
  const {data} = props
  const siteSeo = (data || {}).siteSeo

  return (
    <Layout darkMode>
      <SEO title={siteSeo.seoTitle} description={siteSeo.seoDescription} />
      <AnthosCloud data={data.overview.edges} />
      <AnthosInterested data={data.overview.edges} />
    </Layout>
  )
}

export const query = graphql`
  query AnthosQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    siteSeo: sanityAnthos {
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
    overview: allSanityAnthos(limit: 1) {
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
          overviewButton1
          overviewButton2
          overviewUrl2
          interestedTitle
          interestedDescription
          id
        }
      }
    }
  }
`

export default Anthos
