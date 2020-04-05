import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import GatsbyLogo from "../assets/gatsby-logo.svg";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const flexCentered = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <main>{children}</main>
        <footer style={flexCentered}>
          © {new Date().getFullYear()}, Built with
          <a style={flexCentered} href="https://www.gatsbyjs.org">
            <GatsbyLogo style={{ height: "1.2rem", margin: "0 5px" }} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
