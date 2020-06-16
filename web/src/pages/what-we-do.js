import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query WhatWeDoQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`
const WhatWeDo = props => {
  const {data} = props
  const site = (data || {}).site

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <h1>What We Do</h1>
    </Layout>
  )
}

export default WhatWeDo
