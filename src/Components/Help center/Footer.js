import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const year=new Date()
    return (
      <>
        <footer className='support-footer'>
          <div className='footer-inner'>
            <div className='logo'>
              <Link to={'/'}>
                <img src="https://theme.zdassets.com/theme_assets/759275/4aa93903b7fd0e716e0de5402a5bfcb4fbc05541.svg" alt="Logo" />
              </Link>
              <div className='footer-title'>
                <Link to={'/hc'}>
                  Центр поддержки клиентов
                </Link>
              </div>
            </div>
            <div className='title'>
              <span>OLX - сервис объявлений №1 в Узбекистане </span>
              <span className='subtitle'>
                © 2006-<span>{year.getFullYear()}</span>OLX
              </span>
            </div>
          </div>
        </footer>
      </>
    )
}

export default Footer