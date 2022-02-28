import React from "react";
import { graphql } from "gatsby";

import Layout from "../containers/layout";
import SEO from "../components/seo";
import RampWebinar from "../components/ramp/ramp-webinar";
import RampRegister from "../components/ramp/ramp-register";

const Ramp = (props) => {
  const { data } = props;
  const siteSeo = (data || {}).siteSeo;

  return (
    <Layout>
      <SEO title={siteSeo.seoTitle} description={siteSeo.seoDescription} />
      <div className="ramp-bg">
        <RampWebinar data={data.webinar.edges} />
        <RampRegister data={data.webinar.edges} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query RampQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    siteSeo: sanityRamp {
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
    webinar: allSanityRamp(limit: 1) {
      edges {
        node {
          seoTitle
          seoURL
          seoPhoto {
            alt
            asset {
              url
            }
          }
          seoDescription
          webinarTitle
          webinarSubtitle
          _rawWebinarDescription(resolveReferences: { maxDepth: 10 })
          webinarButton
          registerTitle
          registerDescription
          id
        }
      }
    }
  }
`;

export default Ramp;
