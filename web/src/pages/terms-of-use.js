import React from 'react'
import { graphql } from 'gatsby'
import PortableText from '../components/portableText'

import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'

const TermsOfUse = ({data}) => {

  return (
    <Layout>
      <SEO title='Terms Of Use' />
      <Container>
      {data.terms.edges.map(({ node: terms }) => (
        <div key={terms.id}>
          <h1>{terms.termsTitle}</h1>
          <PortableText blocks={terms._rawTermsContent} />
        </div>
      ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query TermsQuery {
    terms: allSanityLegal {
      edges {
        node {
          id
          _rawTermsContent
          termsTitle
        }
      }
    }
  }
`

export default TermsOfUse
