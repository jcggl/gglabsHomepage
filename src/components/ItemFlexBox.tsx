import React from 'react'
import 'styles/ItemFlexBox.scss'

export default function ItemFlexBox({children, styles}: any) {
  return (
    <div className='item-flex-box' style={styles}>
      {children}
    </div>
  )
}
