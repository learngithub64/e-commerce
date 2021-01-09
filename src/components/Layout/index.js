import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "@components/Header"
import styles from "./styles.module.scss"
import Container from "@components/Container"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.app}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        <Container>{children}</Container>
      </main>

      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
