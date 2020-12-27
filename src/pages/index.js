import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Hello There</h1>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: "0 auto 1.45rem",
          }}
        >
          <Image />
        </div>
      </div>
      <Link to="/blog/">View all posts</Link>
    </div>
  </Layout>
)

export default IndexPage
