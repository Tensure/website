import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DigitalInnovation from '../components/services/digital-innovation'
import CloudInfrastructure from '../components/services/cloud-infrastructure'
import DataInsights from '../components/services/data-insights'
import DevOps from '../components/services/dev-ops'
import ManagedServices from '../components/services/managed-services'
import SupportCTA from '../components/support-cta'

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
      <DigitalInnovation />
      <CloudInfrastructure />
      <DataInsights />
      <DevOps />
      <ManagedServices />
      <SupportCTA />
    </Layout>
  )
}

export default WhatWeDo
