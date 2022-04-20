import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { Link } from 'react-router-dom';

function TopBar({visible,change}) {
  return (
    <div className='topbar'>
        <div className='alert'>
          <FiAlertTriangle/>
          <p>
              SMS orqali kelgan kodlarni hech kimga yubormang! Savollar bo'lsa telefon qiling 712076446 Ish vaqti: Dush-Jum 9:00-18:00
          </p>
        </div>
        <div className='bannerWrapper'>
          <div className='cta'>
              <Link to={'/hc/articles'} id='ctaLink' target={'_blank'}>
                Batafsil ma'lumot  
                <span></span>
              </Link>
          </div>
          <BsX onClick={()=>change(!visible)}/>
        </div>
    </div>
  )
}

export default TopBar