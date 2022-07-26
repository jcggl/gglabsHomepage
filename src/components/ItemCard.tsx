import React from 'react'
import 'style/ItemCard.scss'

export default function ItemCard({children, classes, styles}: any) {
  return (
    <div className={'card ' + classes} style={styles}>
      {children}
    </div>
  )
}
