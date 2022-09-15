import React from 'react'
import 'styles/ItemFlexBox.scss'

export default function ItemFlexBox({children, classes}: any) {
  return (
    <div className={String.raw`w-full flex flex-wrap justify-evenly items-start
      tablet:justify-center ` + classes}>
      {children}
    </div>
  )
}
