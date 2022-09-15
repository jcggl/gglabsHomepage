import React from 'react'

export default function GlobalBtn({text, classes, disabled}: any) {
  return (
    <button className={String.raw`text-white bg-transparent border border-white border-solid rounded-[53px] py-[9px] px-[35px] cursor-pointer leading-normal
      disabled:text-[#a1a1a1] disabled:border-[#a1a1a1] disabled:cursor-auto `
      + classes}
      disabled={disabled}>
      { text }
    </button>
  )
}
