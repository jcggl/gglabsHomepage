import React from 'react'
import NavBar from 'components/NavBar'
import Symbol from 'assets/symbol.png'
import HeaderImg from 'assets/header-img.png'
import 'style/HeaderPage.scss'

export default function HeaderPage() {
  return (
    <header className='header-container'>
      <NavBar />
      <div className='header-deco' style={{backgroundImage: `url(${HeaderImg})`}}>
        <img className='symbol-img' src={Symbol} alt="" />
      </div>
      <div className='header-desc'>
        <h1 className={'header-title extrabold italic'}>GOODGANGLABS</h1>
        <p className={'header-text light'}>
          Build a metaverse avatar communication platform.
        </p>
      </div>
    </header>
  )
}
