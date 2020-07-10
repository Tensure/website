// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-plugin-web-font-loader`,
    //   options: {
    //     typekit: {
    //       id: `kic0ucd`
    //     }
    //   }
    // },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tensure`,
        short_name: `Tensure`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0A2949`,
        display: `standalone`,
        icon: `src/components/images/tensure-favicon.png`,
        cache_busting_mode: `query`,
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
         workboxConfig: {
            globPatterns: [`**/*`]
         }
      }
    }
  ]
}
