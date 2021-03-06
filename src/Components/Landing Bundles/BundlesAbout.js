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
                                    OLX da e??lonlar ular joylashtirilgan sana bo??yicha aks ettiriladi. Bu esa, yangi e??lonlar joylashtirilgan sari, sizning e??loningiz ro??yxatning oxiriga va izlash natijalarining quyi qismiga tushib boraveradi.
                                </p>
                                <br/>
                                <p>
                                    Yuqoriga ko??tarish xizmati yordamida e??loningiz ro??yxatning yuqori o??rinlariga takroran ko??tarilaveradi, xuddi siz uni bir lahza avval joylashtirganingizdek!
                                </p>
                                <p>
                                    Siz Yuqoriga ko??tarish xizmatidan mustaqil ravishda yoki ???Turbo sotish??? yoki ???Tez sotish??? to??plamlarini buyurtirish orqali foydalanishingiz mumkin ??? bunda biz sizning e??loningizni avtomatik ravishda ko??taramiz, siz uning ro??yxatdagi o??rnidan hech xavotirlanmasangiz ham bo??ladi!
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
                                TOP ??? bu e??lonlarni ro??yxatning eng yuqori qismida, maxsus blokda, oddiy e??lonlarning tepasida joylashtirishdir.
                                </p>
                                <br/>
                                <p>
                                Uning e??lonlar ro??yxatning tepasida faqat bir marta joylashtiriladigan Yuqoriga ko??tarishdan farqi shundaki, TOP-e??londa e??lonni ancha uzoq muddat: ???Yengil start??? to??plamida 3 kun, ???Tez sotish??? da 7 kun va ???Turbo sotish??? da 30 kun yuqori o??rinlarda joylashtirish imkoniyatiga ega bo??lasiz.
                                </p>
                                <p>
                                TOP-ro??yxatda xizmatlar to??plami yordamida reklama qilinadigan barcha e??lonlar joylashtiriladi. Ular tasodifiy tartibda navbat bilan namoyon bo??ladi, shuning uchun xavotirga o??rin yo??q: agar siz o??z e??loningizni TOP da ko??rmayotgan bo??lsangiz, uni ayni vaqtda boshqa foydalanuvchilar ko??rayotgan bo??ladilar.
                                </p>
                                <p>
                                    Barcha TOP-e??lonlar bir vaqtda e??lonlarning oddiy ro??yxatida ham ko??rinadi, shuning uchun sizning taklifingiz o??z xaridori yoki mijozini topishiga ishoning???.
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
                            <h4>VIP-e??lonlar</h4>
                                <p className='first-text'>
                                    Agar siz e??loningizni nisbatan premium bo??lgan o??rinda joylashtirish va ancha ko??p javoblar olish istagida bo??lsangiz, u holda VIP-e??lon ??? aynan sizga kerak xizmat turi. Bu oldi-sotti bitimlarini amalga oshirishni tezlashtirishning eng yaxshi usuli, sababi - sizning e??loningiz OLX ning bosh sahifasidan o??rin oladi!
                                </p>
                                <br/>
                                <p>
                                    ???Turbo sotish??? to??plami yordamida reklama qilinadigan barcha e??lonlar Bosh sahifada joylashtiriladi, biroq OLX ga har kuni millionlab foydalanuvchi kirar ekan, sizning takliflaringiz reklamasiz e??lonlarga nisbatan 10 marotaba ko??proq javoblarga ega bo??ladi.
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
                            Yuqoriga ko??tarish
                        </a>
                    </li>
                    <li>
                        <a href="#bundles" id='topselect' onClick={()=>setActive('topselect')}>
                            TOP da joylashtirish
                        </a>
                    </li>
                    <li>
                        <a href="#bundles" id='vip'  onClick={()=>setActive('vip')}>
                            VIP-e??lonlar
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default BundlesAbout