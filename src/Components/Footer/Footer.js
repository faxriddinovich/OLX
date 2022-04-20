import React from 'react'
import { FaChartBar } from "react-icons/fa";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import MainFooter from './MainFooter';
const products=require('../../Database.json')
const logo=require('../../images/logoOlx.png')


function Footer() {
  return (
    <>
        <div className='footer-business-partner'>
            <div className='partner-wrapper'>
               <FaChartBar/>
               <div className='slogan'>
                   <strong>OLX bilan internetda biznesingizni boshlang</strong>
               </div>
               <div className='action'>
                   <a href="https://business.olx.uz/uz/" target={'_blank'}>
                       <span>Batafsil</span>
                   </a>
               </div>
            </div>
        </div>
        <div id='content'>
            <div className='pding'>
                <img src={logo} alt="Logo" />
                <div className='text'>
                    <div>
                        <div className='small'>
                            <h3>O`zbekistonda 1-raqamli e`lonlar servisi</h3>
                            <p className='c73'>
                                Oʻzbekiston xususiy eʼlonlari OLX (avvalgi torg.uz) – bu yerda izlaganingizni topasiz.
                                <br/>
                                "<a href="#">E`lon joylashtirish</a>"
                                tugmasiga bosib, siz istalgan mavzuga oid onlayn-eʼlonni joylashtira olasiz – ish qidirish, xizmat koʻrsatish, avtomobillar, koʻchmas mulk, elektronika va boshqalar savdosi.<br/>
                                OLX Oʻzbekiston servisi yordamida siz deyarli barcha istagan narsangizni sotish yoki sotib olishingiz mumkin. Qidiruv funksiyasidan foydalanib, oʻzingizni qiziqtirgan mavzuga oid sersisda mavjud eʼlonlarni hech bir qiyinchiliksiz topa olasiz.<br/>
                                OLX Oʻzbekiston – sizning ishonchli va tengi yoʻq yordamchingiz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='popularbox'>
            <div className='popularwrapper'>
                <div className='popularitem'>
                    <BsFillFileEarmarkBarGraphFill/>
                    <div className='maincontent'>
                        <h3>OLX servisining bo`limlari:</h3>
                        {products.map(item=><a href="#" key={item.id}>{item.title},</a>)}
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <MainFooter/>
    </>
  )
}

export default Footer