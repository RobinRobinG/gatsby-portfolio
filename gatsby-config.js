module.exports = {
  siteMetadata: {
    title: `Robin's Portfoilo`,
    author: `Robin Guan`,
    description: `This is Robin's portfolio site.`,
    keywords: `Explorer, Designer, Developer, Full-stack, CSS, HTML, JS, Javascript, React, GraphQL, Gatsby, Nodejs, Express, MongoDB, MySQL, C#, .NetCore, Entity, Python, Django, Flask`,
    github: `https://github.com/robinrobing`,
    siteUrl: `https://www.example.com`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hello Robin',
        background_color: '#ffffff',
        theme_color: '#00d1b2',
        display: 'standalone',
        icons: [{
            src: `../src/assets/img/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `../src/assets/img/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    }

  ]
}