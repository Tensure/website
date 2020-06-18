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
          _rawBio
        }
      }
    }
  }
`

function WhoWeAre ({ data }) {
  // const {data} = props
  console.log(data)
  const site = (data || {}).site
  const leaders = (data || {}).leaders

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
      {/* <ul>
      {data.leaders.edges.map(({ node: leader }) => (
        <li key={leader.id}>
          <h3>{leader.name}</h3>
      <p>{leader.linkedin}</p>
        </li>
      ))}
      </ul> */}
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
