/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    titel: 'tutorial',
    description: 'gatsby tutorial via udemy',
    author: '@bodhicougar',
    data: ['item1', 'item2'],
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
