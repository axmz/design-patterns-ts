module.exports = {
  siteMetadata: {
    title: `Design patterns - Typescript`,
    description: `Design patterns in typescript`,
    author: `@axmz`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: [
        'node_modules/', 
        'dist/', 
        '\.cache/'
      ], 
      files: [
        'node_modules/', 
        'dist/', 
        '\.cache/'
      ] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/pages`,
        ignore: [
        'node_modules/', 
        'dist/', 
        '\.cache/'
        ]
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};
