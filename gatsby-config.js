/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'tutorial',
    description: 'Gatsby tutorial via udemy',
    author: '@bodhicougar',
    data: { name: 'walter', age: 54 },
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
