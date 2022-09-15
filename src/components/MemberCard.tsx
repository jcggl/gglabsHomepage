import React from 'react'
import LinkedIn from 'assets/LinkedIn.png'

export default function MemberCard({image, name, role, comment, contect}: any) {
  return (
    <div className={String.raw`w-[clamp(320px,41.6vw,378px)] flex flex-col justify-evenly items-center mb-[clamp(16px,3.25vw,26px)] px-[clamp(32px,4.16vw,37.8px)]`}>
      <div className={String.raw`w-[55%] flex flex-col items-center`}>
        <img className={String.raw`w-full aspect-square mb-[clamp(22px,2.86vw,24px)] grayscale`}
          src={image} alt={name} draggable={false} />
        <h6 className={String.raw`text-white text-[clamp(12px,1.56vw,16px)] mb-[clamp(10px,1.3vw,16px)]`}>{role}</h6>
      </div>
      <h5 className={String.raw`text-white text-[clamp(16px,2.08vw,28px)] leading-[36px] mb-[clamp(4px,0.5vw,6px)]`}>{name}</h5>
      <p className={String.raw`w-[85%] text-[#a1a1a1] text-[clamp(12px,1.56vw,14px)] leading-[170%] mb-2 break-words text-center`}>{comment}</p>
      {
        contect
        &&
        <a className='member-contect' href={contect} target='_blank' rel="noreferrer">
            <img src={LinkedIn} alt={'contect ' + name } draggable={false} />
        </a>
      }
    </div>
  )
}
