module.exports = {
  siteMetadata: {
    title: 'Carson Jones'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
         alias: {
          src: 'src',
          components: 'src/components',
          elements: 'src/elements',
          layout: 'src/layout',
          pages: 'src/pages',
          styles: 'src/styles',
          utils: 'src/utils',
          art: 'src/art',
          data: 'data',
          public: 'public',
        },
        extensions: [
          'js',
          'md',
          'mdx',
        ],
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/layout/Blog.js'),
          default: require.resolve('./src/layout/Page.js')
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/blog/`
      }
    },
    `gatsby-plugin-styled-components`,
  ],
}
