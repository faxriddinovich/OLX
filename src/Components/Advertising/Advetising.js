import React from 'react'
import MainFooter from '../Footer/MainFooter'
import Header from '../Header/Header'

function Advetising() {
  return (
    <>
        <Header/>
        <section id='contentadvertising'>
            <div className='warapper'>
                <div className='content'>
                    <h1>OLX.uz saytida reklama</h1>
                    <ul className='first'>
                        <li>Noyob auditoriya — faqat e-commerce internet segmentining foydalanuvchilari, bu esa —to‘lovga qobiliyatli va faol auditoriya degani</li>
                        <li>Keng qamrovli, tematik to‘plamlar yechimlari: Erkaklarga oid, Ayollarga oid, Avtomobil, Elektronika, Ko‘chmas mulk, Biznes va boshqalar</li>
                        <li>Maqsadli auditoriya, namoyishlar takrorlanishining targetlanishi</li>
                        <li>Nostandart reklama yechimlari</li>
                        <li>Banner o‘rinlarining samarali joylashtirilganligi</li>
                    </ul>
                    <ul className='second'>
                        <li>Reklama beruvchilar uchun prezentatsiya (<a href="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/pdf/OLX.UZ-Media-2017.pdf" target={'_blank'}>Yuklab olish</a>)</li>
                        <li>Reklama materiallariga texnik talablar (<a href="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/pdf/OLX.UZ-Tech.pdf" target={'_blank'}>Yuklab olish</a>)</li>
                    </ul>
                    <p>
                        <strong>OLX.uz saytida reklama joylashtirish bo‘yicha savollar bilan quyidagi telefon raqamlari orqali murojaat qiling:</strong><br/>
                        <span>tel: +998(71) 150-888-4</span><br/>
                        <span>tel: +998(90) 325-888-4</span><br/>
                        <span>email: reklama@olx.uz</span>
                    </p>
                </div>
            </div>
        </section>
        <hr/>
        <MainFooter/>
    </>
  )
}

export default Advetising