import React from 'react'
import globalStyles from 'styles/GlobalStyles.module.scss'

export default function GlobalBtn({text, classes, styles, disabled}: any) {
  return (
    <button className={globalStyles.button + ' ' + classes} style={styles} disabled={disabled}>
      { text }
    </button>
  )
}
