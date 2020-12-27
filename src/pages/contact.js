import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import get from "lodash.get"

export default function Contact({ data }) {
  const { email, phone } = get(data, "allContentfulContact.nodes[0]")

  return (
    <Layout>
      <div>
        <div>
          <p>I'd love to talk! Email me at the address below</p>
          <p>
            <a href="mailto:me@example.com">{email}</a>
          </p>
        </div>
        <div>
          <p>Or if you prefer a call</p>
          <p>
            <span>{phone}</span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query contactEntryQuery {
    allContentfulContact {
      nodes {
        email
        phone
      }
    }
  }
`
