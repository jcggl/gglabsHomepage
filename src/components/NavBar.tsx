import React, { useContext, useEffect, useState } from 'react'
import Logo from 'assets/logo.png'
import { WindowSizeContext } from 'contexts/WindowSizeContext'

export default function NavBar() {
  const [language, setLanguage] = useState('en')
  const windowSize = useContext(WindowSizeContext)

  useEffect(() => {
    const html: any = document.querySelector('html')
    html?.setAttribute('lang', language)
  }, [language])

  type ObjType = {
    [key: string]: string,
    en: string,
    ko: string,
    jp: string
  }
  
  const languages: ObjType = {
    'en': windowSize === 's' ? '🇺🇸 EN':'🇺🇸 English',
    'ko': windowSize === 's' ? '🇰🇷 한':'🇰🇷 한국어',
    'jp': windowSize === 's' ? '🇯🇵 日':'🇯🇵 日本語'
  }
  
  return (
    <nav className={String.raw`w-full h-[10%] flex justify-between items-center bg-transparent px-4 box-border absolute top-0 z-[2]`}>
      <img className={String.raw`h-[50%] cursor-pointer`}
        src={Logo} alt="logo" />
      <select className={String.raw`text-base p-2 rounded-[5px] bg-white/75 backdrop-blur-[2px] border-none font-light cursor-pointer hidden`}
        defaultValue={'en'}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {setLanguage(e.target.value)}}
      >
        {Object.keys(languages).map((key: string) => (
          <option value={key} key={key}>
            {languages[key]}
          </option>
        ))}
      </select>
    </nav>
  )
}
