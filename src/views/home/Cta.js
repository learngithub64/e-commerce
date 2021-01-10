import React from "react"
import styles from "./styles.module.scss"
import Container from "@components/Container"
import Logo from "@components/Logo"

const Cta = () => {
  return (
    <div className={styles.ctaWrapper}>
      <Container>
        <div className={styles.ctaContent}>
          <Logo />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Cta