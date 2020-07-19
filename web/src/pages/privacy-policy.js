import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'
import PortableText from '../components/portableText'

const Privacy = ({data}) => {
  const siteSeo = (data || {}).siteSeo

  return (
    <Layout>
      <SEO
        title={siteSeo.seoTitle}
        description={siteSeo.seoDescription}
      />
      <Container>
      {data.privacy.edges.map(({ node: privacy }) => (
        <div key={privacy.id}>
          <h1>{privacy.privacyTitle}</h1>
          <PortableText blocks={privacy._rawPrivacyContent} />
        </div>
      ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query PrivacyQuery {
    siteSeo: sanityLegal {
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
    privacy: allSanityLegal {
      edges {
        node {
          privacyTitle
          _rawPrivacyContent
          id
        }
      }
    }
  }
`

export default Privacy
