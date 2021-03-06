import React from "react"
import { graphql } from "gatsby"
import SEO from "@components/seo"
import Layout from "@components/Layout"

const Category = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
      </div>
    </Layout>
  )
}

export default Category

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
