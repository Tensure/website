import React from "react";
import { graphql } from "gatsby";
import PortableText from "../components/portableText";

import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";

const RampThankYou = ({ data }) => {
  return (
    <div className="ramp-bg">
      <Layout>
        <SEO title="Thank You for Registering!" />
        <Container>
          {data.thanks.edges.map(({ node: thanks }) => (
            <div className="thank-you-content" key={thanks.id}>
              <h1>{thanks.rampTitle}</h1>
              <PortableText blocks={thanks._rawRampMessage} />
            </div>
          ))}
        </Container>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query RampThanksQuery {
    thanks: allSanityThanks(limit: 1) {
      edges {
        node {
          _rawRampMessage
          rampTitle
          id
        }
      }
    }
  }
`;

export default RampThankYou;
