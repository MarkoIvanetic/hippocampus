const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulBlogPost(limit: 1000) {
          totalCount
          edges {
            node {
              id
              title
              slug
              heroImage {
                title
                fluid(maxWidth: 980) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
              publishDate(formatString: "DD MMMM, YYYY")
              body {
                id
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      // Resolve the paths to our template
      const blogPostTemplate = path.resolve("./src/templates/blogpost.js")

      // Then for each result we create a page.
      result.data.allContentfulBlogPost.edges.forEach(edge => {
        console.warn(edge)
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            data: edge,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
