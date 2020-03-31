import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';

const styles = {
  width: "100%",
  height: "500px",
  border: "15px solid",
  borderRadius: "4px",
  overflow: "hidden",
  margin: "25px 0"
};

export default ({ data }) => {
  const { html, frontmatter: {title}, fields: {slug} } = data.markdownRemark;

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <div>
          <iframe
            src={`https://codesandbox.io/embed/github/axmz/design-patterns-ts/tree/master/src/pages${slug}?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark`}
            style={styles}
            title={`${slug}`}
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
