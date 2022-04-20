import React from 'react'
import { Link } from 'react-router-dom'


function SupportHeader() {
  return (
    <div id='header'>
        <header className='support-header'>
            <div className='main'>
                <div className='logo'>
                    <Link to={'/'}>
                        <img src={'https://theme.zdassets.com/theme_assets/759275/4aa93903b7fd0e716e0de5402a5bfcb4fbc05541.svg'} alt="Logo" />
                    </Link>
                    <Link className='title' to={'/hc'}>
                        Mijozlarni qo'llab-quvvatlash markazi
                    </Link>
                </div>
                <div className='nav-wrapper'>
                    <button>
                        <Link to={'/myaccount'}>
                            E'lon berish
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default SupportHeader