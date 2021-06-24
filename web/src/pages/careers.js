import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import Careers from '../components/careers/careers'

const Career = props => {
  const {data} = props
  const siteSeo = (data || {}).siteSeo

  return (
    <Layout darkMode={true}>
      <SEO
        title={siteSeo.seoTitle}
        description={siteSeo.seoDescription}
      />
      <Careers/>
    </Layout>
  )
}

export const query = graphql`
  query Careers {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    siteSeo: sanityContact {
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
  }
`

export default Career
