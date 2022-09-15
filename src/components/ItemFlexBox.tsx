import React from 'react'

export default function ItemFlexBox({children, classes}: any) {
  return (
    <div className={String.raw`w-full flex flex-wrap justify-evenly items-start
      tablet:justify-center ` + classes}>
      {children}
    </div>
  )
}
