import React from 'react'

export default function Bedge({image, text}: any) {
  return (
    <div className={String.raw`w-[40%] flex flex-col items-center mb-[min(34px,10vw)]
      tablet:w-[clamp(152px,20%,200px)] tablet:mx-[clamp(15px,2vw,30px)]`}>
      <img className={String.raw`w-[clamp(70px,13vw,140px)] aspect-square mb-[clamp(4px,1.56vw,18px)]`}
        src={image} alt={text} />
      <p className={String.raw`text-[#a1a1a1] text-[clamp(10px,11.56vw,14px)] leading-[clamp(16px,2.08vw,20px)] break-words text-center`}>{text}</p>
    </div>
  )
}