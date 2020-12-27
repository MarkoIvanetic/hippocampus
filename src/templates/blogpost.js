import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = data => {
  console.log(data.pathContext.data)
  const {
    id,
    title,
    body,
    heroImage,
    tags,
    publishDate,
  } = data.pathContext.data.node

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <>
          <div key={id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {title}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {publishDate}
              </span>
            </h3>
            <Img fluid={heroImage.fluid} alt={heroImage.title} />
            <div
              dangerouslySetInnerHTML={{
                __html: body?.childMarkdownRemark?.html || "",
              }}
            />
          </div>
          <Link to="/blog">View more posts</Link>
          <Link to="/">Back to Home</Link>
          <hr />
        </>
      </div>
    </Layout>
  )
}

export default BlogPost
