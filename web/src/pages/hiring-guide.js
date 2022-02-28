import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import HiringGuide from '../components/hiring/hiring-guide'
import HiringTalent from '../components/hiring/hiring-talent'

const Hiring = (props) => {
  const {data} = props
  const siteSeo = (data || {}).siteSeo

  return (
    <Layout>
      <SEO title={siteSeo.seoTitle} description={siteSeo.seoDescription} />
      <div className='hiring-bg'>
        <HiringTalent data={data.overview.edges} />
        <HiringGuide data={data.overview.edges} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HiringQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    siteSeo: sanityHiring {
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
    overview: allSanityHiring(limit: 1) {
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
          overviewButton
          downloadTitle
          downloadDescription
          id
        }
      }
    }
  }
`

export default Hiring
