import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query ContactQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`
const Contact = props => {
  const {data} = props
  const site = (data || {}).site

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <h1>Contact</h1>
    </Layout>
  )
}

export default Contact
