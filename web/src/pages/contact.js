import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact/contact-form'

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
      <ContactForm />
    </Layout>
  )
}

export default Contact
