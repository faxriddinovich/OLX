import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import { FaAppStore, FaGooglePay } from 'react-icons/fa'
import Header from '../Header/Header'
import MainFooter from '../Footer/MainFooter'
const {features}=require('../DB/Fake_Data_Base')
const img=require('../../images/olximg.png')

function Apps() {
    console.log(features)
  return (
    <>
    <Header/>
        <section id='hero'>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <h1>Ilova bilan OLX doim yoningizda</h1>
                    <ul>
                        <li><BsCheckCircleFill/>Smartfoning uchun ilovani yuklab oling</li>
                        <li><BsCheckCircleFill/>Bir zumda e'lonni yarating va joylashtiring</li>
                        <li><BsCheckCircleFill/>E'lonlarni izlang va istalgan joydan muloqot qiling</li>
                    </ul>
                    <div className='api-icons'>
                        <a href="https://apps.apple.com/uz/app/torg-uz/id665094472?ign-mpt=uo%3D4">
                            <FaAppStore/>
                            <p>App Store</p>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-landing">
                            <FaGooglePay/>
                            <p>Google Play</p>
                        </a>
                    </div>
                </div>
                <div className='hero-images'>
                    <img src={img} alt="Photo" />
                </div>
            </div>
        </section>
        <section id='content'>
            <div className='content-wrapper'>
                <h2>E’lonlarni ilovamiz yordamida tezroq soting</h2>
                <div className='features'>
                    {features.map(item=><div key={item.id} className={'features-item'}>
                        <div className='item-image'>
                            <img src={item.img} alt="Logo" />
                        </div>
                        <h5>{item.head}</h5>
                        <p>{item.title}</p>
                    </div>)}
                </div>
            </div>
        </section>
        <hr/>
        <MainFooter/>
    </>
  )
}

export default Apps