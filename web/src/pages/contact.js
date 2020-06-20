import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact/contact-form'

const Contact = props => {
  const {data} = props
  const site = (data || {}).site

  return (
    <Layout darkMode={true}>
      <SEO
        title='Contact Us'
      />
      <ContactForm data={data.contact.edges} />
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    contact: allSanityContact {
      edges {
        node {
          id
          contactTitle
          contactSubtitle
        }
      }
    }
  }
`

export default Contact
