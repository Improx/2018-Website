module.exports = {
  siteMetadata: {
    title: `Improx Games`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          // you can also specify font weights and styles
          `source sans pro:300,400,400i,700`,
        ],
      },
    },
  ],
};
