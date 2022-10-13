import React from 'react'

export default function ItemFlexBox({children, classes}: any) {
  return (
    <div className={classes + String.raw` w-full flex flex-wrap justify-evenly items-start`}>
      {children}
    </div>
  )
}
