import React from 'react'
import { FaAppStore,FaGooglePlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
function MainFooter() {
  return (
    <div className='mainfooter'>
        <div className='footerwrapper'>
            <div className='lists'>
                <ul>
                    <li><Link to={'/apps'}>Mobil ilovalar</Link></li>
                    <li><Link to={'/hc'}>Yordam</Link></li>
                    <li><Link to={'landingbundles'}>Pullik xizmatlar</Link></li>
                    <li><a href={'https://help.olx.uz/hc/ru/articles/360009197178'}>Foydalanish shartlari</a></li>
                    <li><a href='https://help.olx.uz/uz/elonlarni-joylashtirish-qoidalari/maxfiylik-siyosati/'>Maxfiylik siyosati</a></li>
                    <li><Link to={'/advertising'} target={'_blank'}>Saytda reklama</Link></li>
                </ul>
                <ul>
                    <li><a href='#'>Qanday sotish va sotib olish</a></li>
                    <li><a href='#'>Xavfsizlik qoidalari</a></li>
                    <li><a href='#'>Sayt xaritasi</a></li>
                    <li><a href='#'>Mintaqalar xaritasi</a></li>
                    <li><a href='#'>Ommaviy so`rovlar</a></li>
                    <li><a href='#'>Kariera</a></li>
                </ul>
                <div className='social'>
                    <ul id='socialmedia'>
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer" target={'_blank'}>
                                <FaGooglePlay/>
                                <span>Get It on <br/> Google Play</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://apps.apple.com/uz/app/torg-uz/id665094472?ign-mpt=uo%3D4" target={'_blank'}>
                                <FaAppStore id='appstore'/>
                                <span>Download on the <br/> App Store</span>
                            </a>
                        </li>
                        <br/>
                    </ul>
                    <p>Telefoningiz uchun bepul ilova</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainFooter