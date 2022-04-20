import React, { useEffect } from 'react'

function BundlesAbout() {
    function setActive(id){
        if(id==='top'){
            const x=document.getElementById('top'),y=document.getElementById("topselect"),z=document.getElementById("vip")
            x.classList.add('active')
            y.classList.remove('active')
            z.classList.remove("active")
            const a=document.getElementById("articletop"),b=document.getElementById("articletopselect"),c=document.getElementById("articlevip")
            a.style.display="block"
            b.style.display="none"
            c.style.display='none'
        }
        else if(id==='topselect'){
            const x=document.getElementById('top'),y=document.getElementById("topselect"),z=document.getElementById("vip")
            x.classList.remove('active')
            y.classList.add('active')
            z.classList.remove("active")
            const a=document.getElementById("articletop"),b=document.getElementById("articletopselect"),c=document.getElementById("articlevip")
            a.style.display="none"
            b.style.display="block"
            c.style.display='none'
        }
        else if(id==='vip'){
            const x=document.getElementById('top'),y=document.getElementById("topselect"),z=document.getElementById("vip")
            x.classList.remove('active')
            y.classList.remove('active')
            z.classList.add("active")
            const a=document.getElementById("articletop"),b=document.getElementById("articletopselect"),c=document.getElementById("articlevip")
            a.style.display="none"
            b.style.display="none"
            c.style.display='block'
        }
    }
    useEffect(()=>{
        const x=document.getElementById('top'),y=document.getElementById("topselect"),z=document.getElementById("vip")
        x.classList.add('active')
        y.classList.remove('active')
        z.classList.remove("active")
        const a=document.getElementById("articletop"),b=document.getElementById("articletopselect"),c=document.getElementById("articlevip")
        a.style.display="block"
        b.style.display="none"
        c.style.display='none'
    },[])
  return (
    <section className='bundles-about' id='bundles'>
        <div className='container'>
            <h3>Pullik xizmatlar qanday ishlashini bilib oling</h3>
            <div className='bundlesAbout' id='about'>
                <article className='article-about' id='articletop'>
                    <div className='wrapper'>
                        <div className='about-content'>
                            <h4>Yuqoriga ko'tarish</h4>
                                <p className='first-text'>
                                    OLX da eʼlonlar ular joylashtirilgan sana boʻyicha aks ettiriladi. Bu esa, yangi eʼlonlar joylashtirilgan sari, sizning eʼloningiz roʻyxatning oxiriga va izlash natijalarining quyi qismiga tushib boraveradi.
                                </p>
                                <br/>
                                <p>
                                    Yuqoriga koʻtarish xizmati yordamida eʼloningiz roʻyxatning yuqori oʻrinlariga takroran koʻtarilaveradi, xuddi siz uni bir lahza avval joylashtirganingizdek!
                                </p>
                                <p>
                                    Siz Yuqoriga koʻtarish xizmatidan mustaqil ravishda yoki “Turbo sotish” yoki “Tez sotish” toʻplamlarini buyurtirish orqali foydalanishingiz mumkin – bunda biz sizning eʼloningizni avtomatik ravishda koʻtaramiz, siz uning roʻyxatdagi oʻrnidan hech xavotirlanmasangiz ham boʻladi!
                                </p>
                        </div>
                        <div className='about-image'>
                            <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/ilu-refresh.svg" alt="Logo" />
                        </div>
                    </div>
                </article>
                <article className='article-about' id='articletopselect'>
                    <div className='wrapper'>
                        <div className='about-content'>
                            <h4>TOP da joylashtirish</h4>
                                <p className='first-text'>
                                TOP – bu eʼlonlarni roʻyxatning eng yuqori qismida, maxsus blokda, oddiy eʼlonlarning tepasida joylashtirishdir.
                                </p>
                                <br/>
                                <p>
                                Uning eʼlonlar roʻyxatning tepasida faqat bir marta joylashtiriladigan Yuqoriga koʻtarishdan farqi shundaki, TOP-eʼlonda eʼlonni ancha uzoq muddat: “Yengil start” toʻplamida 3 kun, “Tez sotish” da 7 kun va “Turbo sotish” da 30 kun yuqori oʻrinlarda joylashtirish imkoniyatiga ega boʻlasiz.
                                </p>
                                <p>
                                TOP-roʻyxatda xizmatlar toʻplami yordamida reklama qilinadigan barcha eʼlonlar joylashtiriladi. Ular tasodifiy tartibda navbat bilan namoyon boʻladi, shuning uchun xavotirga oʻrin yoʻq: agar siz oʻz eʼloningizni TOP da koʻrmayotgan boʻlsangiz, uni ayni vaqtda boshqa foydalanuvchilar koʻrayotgan boʻladilar.
                                </p>
                                <p>
                                    Barcha TOP-eʼlonlar bir vaqtda eʼlonlarning oddiy roʻyxatida ham koʻrinadi, shuning uchun sizning taklifingiz oʻz xaridori yoki mijozini topishiga ishoning”.
                                </p>
                        </div>
                        <div className='about-image'>
                            <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/ilu-top.svg" alt="Logo" />
                        </div>
                    </div>
                </article>
                <article className='article-about' id='articlevip'>
                    <div className='wrapper'>
                        <div className='about-content'>
                            <h4>VIP-eʼlonlar</h4>
                                <p className='first-text'>
                                    Agar siz eʼloningizni nisbatan premium boʻlgan oʻrinda joylashtirish va ancha koʻp javoblar olish istagida boʻlsangiz, u holda VIP-eʼlon – aynan sizga kerak xizmat turi. Bu oldi-sotti bitimlarini amalga oshirishni tezlashtirishning eng yaxshi usuli, sababi - sizning eʼloningiz OLX ning bosh sahifasidan oʻrin oladi!
                                </p>
                                <br/>
                                <p>
                                    “Turbo sotish” toʻplami yordamida reklama qilinadigan barcha eʼlonlar Bosh sahifada joylashtiriladi, biroq OLX ga har kuni millionlab foydalanuvchi kirar ekan, sizning takliflaringiz reklamasiz eʼlonlarga nisbatan 10 marotaba koʻproq javoblarga ega boʻladi.
                                </p>
                        </div>
                        <div className='about-image'>
                            <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/ilu-home.svg" alt="Logo" />
                        </div>
                    </div>
                </article>
            </div>
            <div className='bundles-content'>
                <ul className='bundles-tables'>
                    <li>
                        <a href="#bundles" id='top' onClick={()=>setActive('top')}>
                            Yuqoriga koʻtarish
                        </a>
                    </li>
                    <li>
                        <a href="#bundles" id='topselect' onClick={()=>setActive('topselect')}>
                            TOP da joylashtirish
                        </a>
                    </li>
                    <li>
                        <a href="#bundles" id='vip'  onClick={()=>setActive('vip')}>
                            VIP-eʼlonlar
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default BundlesAbout