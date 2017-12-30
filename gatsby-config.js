module.exports = {
  siteMetadata: {
    title: `Joe Sutton's Creative Portfolio`,
    author: `Joe Sutton`,
    description: `The creative portfolio of Joe Sutton`,
    siteUrl: 'https://joesutton.co'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `red`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joe Sutton's Creative Portfolio`,
        short_name: `Joe's Portfolio`,
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000'
      }
    },
    `gatsby-plugin-netlify`
  ]
}
