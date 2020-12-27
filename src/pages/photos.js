import React from "react"
import { graphql } from "gatsby"
import get from "lodash.get"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Photos({ data }) {
  const images = get(data, "allContentfulAsset.nodes")

  return (
    <Layout>
      <SEO title="Working with Gatsby Image" />
      <h2>Photos ({images.length})!</h2>
      <div style={{ display: `flex`, flexDirection: `column` }}>
        {images.map((image, i) => {
          return (
            <Img draggable={false} key={image.id + i} fixed={image.fixed} />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AssetsPhotos {
    allContentfulAsset(filter: { description: { eq: "photos_page" } }) {
      nodes {
        id
        title
        description
        fixed {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
