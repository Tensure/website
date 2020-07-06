import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'
import SinglePurpose from '../components/about/single-purpose'
import Leadership from '../components/about/leadership'
import SupportCTA from '../components/support-cta'

function WhoWeAre ({ data }) {

  return (
    <Layout>
      <SEO
        title='Who We Are'
      />
      <SinglePurpose data={data.section1.edges} />
      <Container>
        <Leadership data={data.leaders.edges} />
      </Container>
      <SupportCTA data={data.support.edges} />
    </Layout>
  )
}

export const query = graphql`
  query WhoWeAreQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    section1: allSanityWhoWeAre(limit: 1) {
      edges {
        node {
          id
          title
          subtitle
          photo2 {
            alt
            asset {
              url
            }
          }
          photo1 {
            alt
            asset {
              url
            }
          }
          paragraph1
          paragraph2
        }
      }
    }
    leaders: allSanityTeamMember {
      edges {
        node {
          name
          slug {
            current
          }
          id
          linkedin
          email
          image {
            alt
            asset {
              url
            }
          }
          _rawBio(resolveReferences: {maxDepth: 10})
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

export default WhoWeAre
