import React from 'react'

import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'

const ThankYou = () => {

  return (
    <Layout>
      <SEO title='Thank You!' />
      <Container>
        <h1>Thank You!</h1>
        <p>You have succefully submitted the form. We will get back to you as soon as possible!</p>
      </Container>
    </Layout>
  )
}

export default ThankYou
