import React from 'react'
import 'styles/ItemCard.scss'

export default function ItemCard({children, classes, styles}: any) {
  return (
    <div className={'item-card ' + classes} style={styles}>
      {children}
    </div>
  )
}
