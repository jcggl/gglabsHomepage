import React from 'react'
import secondLogo from 'assets/logo2.png'
import 'styles/FooterPage.scss'

export default function FooterPage() {
  return (
    <footer className='footer-container'>
      <div className='footer-desc'>
        <h3 className='desc-title extrabold italic'>
          We are<br/>
          GoodGang Labs
        </h3>
        <h5 className='desc-option bold'>
          Contact Us
        </h5>
        <span className='desc-text light'>
          {'Want to join our Eternal Beership?'}
          <br/>
          {'Shoot us an '}
          <a className='desc-anchor bold' href='mailto:hello@goodganglabs.com'>
            hello@goodganglabs.com
          </a>
        </span>
      </div>
      <div className='footer-info'>
        <img className='footer-logo' src={secondLogo} alt="logo" />
        <p className='footer-copyright'>
          Ⓒ2022 GOOD GANG LABS PTE. LTD.
        </p>
      </div>
    </footer>
  )
}
