import React from 'react'

export default function ItemCard({ children, classes }: any) {
  return (
    <div className={String.raw`flex flex-col justify-center items-start rounded-[8px] p-[clamp(16px,2.34vw,40px)] relative break-words box-border ` + classes}>
      {children}
    </div>
  )
}
