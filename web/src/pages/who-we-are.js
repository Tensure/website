import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'
import SinglePurpose from '../components/about/single-purpose'
import Leadership from '../components/about/leadership'
import TensureMinds from '../components/about/tensure-minds'
import SupportCTA from '../components/support-cta'

export const query = graphql`
  query WhoWeAreQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`
const WhoWeAre = props => {
  const {data} = props
  const site = (data || {}).site

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      {/* Single Purpose Section */}
      <SinglePurpose />
      {/* Team Members */}
      <Container>
        <Leadership />
      </Container>
      <TensureMinds />
      {/* Support CTA */}
      <SupportCTA />
    </Layout>
  )
}

export default WhoWeAre
