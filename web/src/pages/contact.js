import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact/contact-form'

const Contact = props => {
  const {data} = props
  const siteSeo = (data || {}).siteSeo

  return (
    <Layout darkMode={true}>
      <SEO
        title={siteSeo.seoTitle}
        description={siteSeo.seoDescription}
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
    siteSeo: sanityContact {
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
