import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'
import ApprenticeProgram from '../components/apprentice/apprentice-program'
import ProgramOverview from '../components/apprentice/program-overview'
import FAQ from '../components/apprentice/faq'
import Application from '../components/apprentice/application'

export const query = graphql`
  query ApprenticeshipsQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`
const Apprenticeships = props => {
  const {data} = props
  const site = (data || {}).site

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <ApprenticeProgram />
      <ProgramOverview />
      <Container>
        <FAQ />
      </Container>
      <Application />
    </Layout>
  )
}

export default Apprenticeships
