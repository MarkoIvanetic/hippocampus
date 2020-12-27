import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all blogposts!"}</h1>
      <h4>{data.allContentfulBlogPost.totalCount} Posts</h4>
      <div>
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default BlogPosts

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      totalCount
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
