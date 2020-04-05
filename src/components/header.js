import React from "react"
import { Link } from "gatsby"
import GithubLogo from "../assets/github-logo.svg";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333333`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent:`space-between`,
        alignItems: `center`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a href="https://github.com/axmz/design-patterns-ts">
        <GithubLogo style={{height: `3rem`, width: '3rem', fill: `white`}}/>
      </a>
    </div>
  </header>
)

export default Header
