import React, { Fragment } from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styles from "./styles.module.scss"

const languageName = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
}

const Language = () => {
  return (
    <Fragment>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              className={
                currentLocale === language
                  ? styles.selectedLanguage
                  : styles.language
              }
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </Fragment>
  )
}

export default Language
