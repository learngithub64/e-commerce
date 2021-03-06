import React from "react"
import SEO from "@components/seo"
import Layout from "@components/Layout"
import Categories from "@views/home/Categories"
import styles from "@views/home/styles.module.scss"
import Container from "@components/Container"
import Cta from "@views/home/Cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.homeWrapper}>
      <Container>
        <Categories />
      </Container>
      <Cta />
    </div>
  </Layout>
)

export default IndexPage
