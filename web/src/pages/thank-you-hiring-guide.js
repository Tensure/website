import React from "react";
import { graphql } from "gatsby";
import PortableText from "../components/portableText";

import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";

const HiringThankYou = ({ data }) => {
  return (
    <div className="hiring-bg">
      <Layout>
        <SEO title="Download The Hiring Guide!" />
        <Container>
          {data.thanks.edges.map(({ node: thanks }) => (
            <div className="thank-you-content" key={thanks.id}>
              <h1>{thanks.hiringTitle}</h1>
              <PortableText blocks={thanks._rawHiringMessage} />
            </div>
          ))}
        </Container>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query HiringThanksQuery {
    thanks: allSanityThanks(limit: 1) {
      edges {
        node {
          _rawHiringMessage
          hiringTitle
          id
        }
      }
    }
  }
`;

export default HiringThankYou;
