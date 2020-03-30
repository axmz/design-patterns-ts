import React from "react";
import { graphql, withPrefix } from "gatsby";
import Helmet from "react-helmet"

export default ({ data }) => {
  console.log("data", data);
  const { html, frontmatter } = data.markdownRemark;

  return (
    <div>
      <Helmet> <script src={withPrefix('index.ts')} type="text/javascript" /> </Helmet>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
