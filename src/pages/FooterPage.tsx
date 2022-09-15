import React from 'react'
import secondLogo from 'assets/logo2.png'
import 'styles/FooterPage.scss'

export default function FooterPage() {
  return (
    <footer className={String.raw`w-full max-w-[1200px] flex flex-col items-center mt-[clmap(120px,16vw,250px)] px-4 box-border`}>
      <div className={String.raw`w-full flex flex-col items-start mb-[clamp(120px,15.6vw,316px)]`}>
        <h3 className={String.raw`title`}>
          We are<br/>
          GoodGang Labs
        </h3>
        <h5 className={String.raw`text-white text-[clamp(16px,3.1vw,28px)] font-bold leading-[clamp(24px,3.1vw,36px)] mb-[clamp(10px,1.5vw,16px)]`}>
          Contact Us
        </h5>
        <span className={String.raw`desc`}>
          {'Want to join our Eternal Beership?'}
          <br/>
          {'Shoot us an '}
          <a className={String.raw`text-[#a1a1a1] font-bold no-underline`}
            href='mailto:hello@goodganglabs.com'>
            hello@goodganglabs.com
          </a>
        </span>
      </div>
      <div className={String.raw`w-full self-start pb-[min(5.86vw,78px)]`}>
        <img className={String.raw`w-[min(33%,150px)] aspect-[3/1] mb-[clamp(12px,1.56vw,15px)]`}
          src={secondLogo} alt="logo" />
        <p className={String.raw`text-[#a1a1a1] text-[clamp(10px,1.5vw,12px)] leading-[150%]`}>
          Ⓒ2022 GOOD GANG LABS PTE. LTD.
        </p>
      </div>
    </footer>
  )
}
