import React from 'react'
import globalStyles from 'style/GlobalStyles.module.scss'

export default function GlobalBtn({text, classes, styles}: any) {
  return (
    <button className={globalStyles.button + ' ' + classes} style={styles}>
      { text }
    </button>
  )
}
