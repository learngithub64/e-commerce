import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./styles.module.scss"
import Img from "gatsby-image"

const Categories = () => {
  const categories = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/categories/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              imageAlt
              image {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={styles.categoriesWrapper}>
      <h1>Main Categories</h1>
      <div className={styles.categoriesContent}>
        {categories?.allMarkdownRemark?.edges?.map(
          ({ node: { frontmatter: category } }) => (
            <div className={styles.categoryContainer}>
              <Img
                fluid={category?.image?.childImageSharp?.fluid}
                alt={category?.imageAlt}
              />
              <h3>{category?.title}</h3>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Categories
