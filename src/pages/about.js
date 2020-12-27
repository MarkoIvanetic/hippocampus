import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog posts" />

      <div class="title"></div>
      <div class="para-container"></div>
      <img src="" alt="" />
      <div class="para-container"></div>
    </Layout>
  )
}

export default About

// export const query = graphql`
//   query BlogPostsPageQuery {
//     allContentfulBlogPost(limit: 1000) {
//       totalCount
//       edges {
//         node {
//           id
//           title
//           slug
//         }
//       }
//     }
//   }
// `
