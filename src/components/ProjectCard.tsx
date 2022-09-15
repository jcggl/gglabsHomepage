import React from 'react'
import GlobalBtn from './GlobalBtn'

export default function ProjectCard({cardAttr, buttonAttr}: any) {
  return (
    <div className={String.raw`min-h-[min(60vw,734px)] flex flex-col ` + cardAttr.classes}>
      <img className={String.raw`w-full aspect-square border-2 border-[#3F3F46] border-solid rounded-[5px] mb-[clamp(12px,1.6vw,30px)]`}
        src={cardAttr.image} alt={cardAttr.title} draggable={false} />
      <div className={String.raw`flex flex-col-reverse flex-wrap justify-between items-end mb-[clamp(2px,0.8vw,12px)]
        desktop:flex-row desktop:items-center`}
      >
        <h5 className={String.raw`text-white text-[clamp(24px,3.6vw,38px)] font-bold leading-[130%] mr-auto`}>
          {cardAttr.title}
        </h5>
        <GlobalBtn
          text={buttonAttr.text}
          classes={buttonAttr.classes}
          disabled={buttonAttr.disabled}
        />
      </div>
      <p className={String.raw`w-full text-[#a1a1a1] text-[clamp(14px,1.8vw,18px)] leading-[clamp(20px,2.9vw,24px)] font-light
        desktop:w-[85%]`}
      >
        {cardAttr.text}
      </p>
    </div>
  )
}
