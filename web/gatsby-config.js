// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-159211717-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true
      }
    },
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
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "7506917",
          respectDNT: true,
          productionOnly: true,
      },
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
        icon: `src/components/images/tensure-favicon-transparent.png`,
        cache_busting_mode: `query`
      }
    },
    `gatsby-plugin-offline`
  ]
}
