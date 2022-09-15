import React from 'react'
import NavBar from 'components/NavBar'
import Symbol from 'assets/symbol.png'
import HeaderImg from 'assets/header-img.png'
// import 'styles/HeaderPage.scss'

export default function HeaderPage() {
  return (
    // <header className='header-container'>
    <header className={String.raw`w-full max-w-[1200px] h-screen bg-white flex flex-col justify-end items-start relative overflow-hidden px-4`}>
      <NavBar />
      <div className={String.raw`
        w-[90%] h-full right-[-10%] absolute top-0 bg-left bg-cover
        tablet:w-[60%] tablet:right-[-12.5%]`}
        style={{ backgroundImage: `url(${HeaderImg})` }}>
        <img className={String.raw`
          w-[max(120px,25vw)] top-[30%] left-[45%] absolute rounded-[50%] backdrop-blur-[4px]
          tablet:w-[min(20vw,230px)] tablet:top-[25%] tablet:left-[40%]`}
          src={Symbol} alt="" />
      </div>
      <div className={String.raw`z-[2] mb-[clamp(40px,8vw,80px)] pl-1`}>
        <h1 className={String.raw`
          w-[max(205px,40%)] mb-[clamp(40px,8vw,80px)] text-[clamp(70px,11vw,140px)] font-extrabold italic tracking-[calc(clamp(70px,11vw,140px)*-0.05)] leading-[105%] break-all
          tablet:w-[72%]`}
        >
          GOODGANGLABS
        </h1>
        <p className={String.raw`
          w-[max(224px,50%)] text-[#1f1f1f] text-[clamp(14px,3vw,30px)] leading-[clamp(27px,160%,50px)]
          tablet:w-[65%]`}
        >
          Bringing people together through avatars
        </p>
      </div>
    </header>
  )
}
