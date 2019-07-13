/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'tutorial',
    description: 'Gatsby Tutorial via Udemy',
    author: '@bodhicougar',
    data: { name: 'Walter', age: 54 },
  },
  plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  `gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
