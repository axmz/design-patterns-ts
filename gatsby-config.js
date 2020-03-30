module.exports = {
  siteMetadata: {
    title: `Design patterns - Typescript`,
    description: `Design patterns in typescript`,
    author: `@axmz`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/patterns/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ]
};
