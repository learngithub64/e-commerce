import React from "react"
import styles from "./styles.module.scss"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import Language from "@components/Language"

const Header = () => {
  const intl = useIntl()
  const languages = ["en", "fr", "de"]
  return (
    <div className={styles.headerContainer}>
      <div className={styles.topNavigationContainer}>
        <div className={styles.topNavigation}>
          <Language />
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/help">
            {intl.formatMessage({ id: "header.topNavigation.help" })}
          </Link>
        </div>
      </div>

      <div className={styles.bottomNavigationContainer}>
        <div className={styles.bottomNavigationWrapper}>
          <div className={styles.bottomNavigation}>
            <div className={styles.bottomLeft}>
              <p>e-COMMERCE</p>
            </div>
            <div className={styles.bottomMiddle}>
              <input
                className="search-box"
                placeholder="Java, Software, Game..."
                type="search"
                // onChange={event => this.props.searchField(event.target.value)}
              ></input>
            </div>
            <div className={styles.bottomRight}>
              <p>Account</p>
              <p>Basket</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
