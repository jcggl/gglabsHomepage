import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Logo from 'assets/logo.png'
import 'styles/NavBar.scss'
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
    <nav className='nav-container'>
      <img className='goodgang-logo' src={Logo} alt="logo" />
      <select className='language-select' defaultValue={'en'}
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
