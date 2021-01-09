import React from "react"
import SEO from "@components/seo"
import Layout from "@components/Layout"
import Categories from "@views/home/Categories"
import styles from "@views/home/styles.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.homeWrapper}>
      <Categories />
    </div>
  </Layout>
)

export default IndexPage
