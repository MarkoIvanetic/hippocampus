import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import { Navigation } from "./navigation"
import containerStyles from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={containerStyles.container}>
      <Navigation />
      <h1>{data.site.siteMetadata.title}</h1>
      <hr />
      {children}
    </div>
  )
}

export default Layout
