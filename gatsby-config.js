module.exports = {
  siteMetadata: {
    siteUrl: "https://web3-examples.netlify.app/",
    title: "web3-examples",
  },
  // In your gatsby-config.js
  plugins: [

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PKG9PBF",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },

    // Data source: filesystem
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `tutorial-examples`,
        path: `${__dirname}/tutorial-examples`,
      }
    },

    // To transform the .mdx files from the datasource into a usable format. 
    `gatsby-plugin-mdx`,
  ]
};
