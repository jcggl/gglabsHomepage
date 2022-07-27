import React, { useState } from 'react'
import Logo from 'assets/logo.png'
import 'styles/NavBar.scss'

export default function NavBar() {
  const [language, setLanguage] = useState('en')

  const languages: object = {
    'en': '🇺🇸 English',
    'ko': '🇰🇷 한국어',
    'jp': '🇯🇵 日本語'
  }
  
  return (
    <nav className='nav-container'>
      <img className='goodgang-logo' src={Logo} alt="" />
      <select className='language-select' defaultValue={'en'}>
        <option value='en'>🇺🇸 English</option>
        <option value='ko'>🇰🇷 한국어</option>
        <option value='jp'>🇯🇵 日本語</option>
      </select>
    </nav>
  )
}
