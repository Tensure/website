import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'

const ThankYou = ({data}) => {
  return (
    <Layout>
      <SEO title='Thank You!' />
      <Container>
        {data.thanks.edges.map(({node: thanks}) => (
          <div key={thanks.id}>
            <h1>{thanks.title}</h1>
            <p>{thanks.message}</p>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ThanksQuery {
    thanks: allSanityThanks(limit: 1) {
      edges {
        node {
          title
          message
          id
        }
      }
    }
  }
`

export default ThankYou
