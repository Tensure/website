import React from "react";
import { graphql } from "gatsby";

import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import ApprenticeProgram from "../components/apprentice/apprentice-program";
import ProgramOverview from "../components/apprentice/program-overview";
import FAQ from "../components/apprentice/faq";
import Application from "../components/apprentice/application";

const Apprenticeships = (props) => {
  const { data } = props;
  const siteSeo = (data || {}).siteSeo;

  return (
    <Layout>
      <SEO title={siteSeo.seoTitle} description={siteSeo.seoDescription} />
      <ApprenticeProgram data={data.apprentice.edges} />
      <ProgramOverview data={data.apprentice.edges} />
      <Container>
        <FAQ data={data.faqs.edges} />
      </Container>
      <Application data={data.apprentice.edges} />
    </Layout>
  );
};

export const query = graphql`
  query ApprenticeshipsQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    siteSeo: sanityApprenticeship {
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
    apprentice: allSanityApprenticeship(limit: 1) {
      edges {
        node {
          programUrl
          programTitle
          programSubtitle
          programPhoto {
            alt
            asset {
              url
            }
          }
          volunteerPhoto {
            alt
            asset {
              url
            }
          }
          programButton
          overviewTitle
          overviewSubtitle
          internshipPhoto {
            alt
            asset {
              url
            }
          }
          id
          apprenticeshipPhoto {
            alt
            asset {
              url
            }
          }
          applicationTitle
          applicationSubtitle
          applicationPhoto {
            alt
            asset {
              url
            }
          }
          _rawVolunteerContent(resolveReferences: { maxDepth: 10 })
          _rawApprenticeshipContent(resolveReferences: { maxDepth: 10 })
          _rawInternshipContent(resolveReferences: { maxDepth: 10 })
          _rawProgramDescription(resolveReferences: { maxDepth: 10 })
        }
      }
    }
    faqs: allSanityFaq {
      edges {
        node {
          question
          answer
          id
        }
      }
    }
  }
`;

export default Apprenticeships;
