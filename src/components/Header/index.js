import React from "react"
import styles from "./styles.module.scss"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.topNavigationContainer}>
        <div className={styles.topNavigation}>
          <Link to="/contact-us">English</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>

      <div className={styles.bottomNavigationContainer}>
        <div className={styles.bottomNavigation}>
          <p>Account</p>
          <p>Basket</p>
        </div>
      </div>
    </div>
  )
}

export default Header
