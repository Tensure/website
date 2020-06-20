import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import DigitalInnovation from '../components/services/digital-innovation'
import CloudInfrastructure from '../components/services/cloud-infrastructure'
import DataInsights from '../components/services/data-insights'
import DevOps from '../components/services/dev-ops'
import ManagedServices from '../components/services/managed-services'
import SupportCTA from '../components/support-cta'

function WhatWeDo ({ data }) {
  const site = (data || {}).site

  return (
    <Layout>
      <SEO
        title='What We Do'
      />
      <DigitalInnovation data={data.services.edges} />
      <CloudInfrastructure data={data.services.edges} />
      <DataInsights data={data.services.edges} />
      <DevOps data={data.services.edges} />
      <ManagedServices data={data.services.edges} />
      <SupportCTA data={data.support.edges} />
    </Layout>
  )
}

export const query = graphql`
  query WhatWeDoQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    services: allSanityWhatWeDo(limit: 1) {
      edges {
        node {
          pageTitle
          pageSubtitle
          managedTitle
          managedSubtitle
          innovationTitle
          innovationSubtitle
          id
          devTitle
          devSubtitle
          dataTitle
          dataSubtitle
          cloudTitle
          cloudSubtitle
          _rawCloudDescription(resolveReferences: {maxDepth: 10})
          _rawDataDescription(resolveReferences: {maxDepth: 10})
          _rawDevDescription(resolveReferences: {maxDepth: 10})
          _rawInnovationDescription(resolveReferences: {maxDepth: 10})
          _rawManagedDescription(resolveReferences: {maxDepth: 10})
        }
      }
    }
    support: allSanitySupport(limit: 1) {
      edges {
        node {
          supportTitle
          supportSubtitle
          supportButton
          id
          supportUrl
          supportImage {
            alt
            asset {
              url
            }
          }
        }
      }
    }
  }
`

export default WhatWeDo
