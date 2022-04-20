import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import ResultSearch from './ResultSearch'
import SupportFooter from '../Support/SupportFooter'
import Footer from './Footer'

function Container() {
  return (
    <>
        <div className='article-container'>
            <aside className='article-sidebar'>
                <div className='collapse-sidebar'>
                    <span className='boldHeader'>Статьи в этом разделе</span>
                    <div className='sidebar-body'>
                        <ul>
                            <li>Xavfsizlik to'g'risida umumiy ma'lumot!</li>
                            <li>Yangi qurilmadan kirishni tasdiqlash - "Bu haqiqatan sizmisiz?" xabari</li>
                            <li>SMS-firibgarlari</li>
                            <li>OLXning firibgarlardan himoya choralari</li>
                            <li>Xorijiy internet firibgarlar</li>
                            <li>Ko'rsatilgan ma'lumotlarning maxfiyligi</li>
                            <li>Ma’lumotlarni uchinchi shaxslarga o’tkazish</li>
                            <li>To’lovlar xavfsizligi</li>
                            <li>Xavfsizlik: Ko’chmas mulk bo’limi</li>
                            <li>Xavfsizlik: Ish bo’limi</li>
                        </ul>
                    </div>
                </div>
            </aside>
            <article id='article-content'>
                <header className='article-header'>
                    <h1 className='titleheader'>Xavfsizlik to'g'risida umumiy ma'lumot!</h1>
                    <div className='author'>
                        <div className='meta'>
                            <ul className='meta-group'>
                                <li>4 мес. назад</li>
                                <li>Обновлено</li>
                            </ul>
                        </div>
                    </div>
                </header>
                <section className='article-info'>
                    <div className='articleContent'>
                        <div className='article-body'>
                            <h4>Firibgar/moshenniklar qo’liga tushib aldanib qolmasligingiz uchun quyidagi vaziyatlardan qochishni va judayam ehtiyot bo’lishingizni tavsiya etamiz.</h4>
                            <p>
                                <span>1 <strong> O'zbekiston Respublikasida OLXuz servisi </strong>
                                    uchun mas'ul bo'lgan yuridik shaxs - tovarlarni <strong>yetkazib berishni</strong><span><strong>AMALGA OSHIRMAYDI!</strong></span>
                                </span>
                                Agarda sizni tovarlarni yetkazib berish OLXuz orqali amalga oshirilishiga ishontirishsa, o’ylab ko’ring, ehtimol, 
                                <strong>ushbu inson firibgar/moshennik bo’lishi mumkin.</strong>
                            </p>


                            <p>
                                2.<strong>Noma'lum havolalarga bosib o’tmang!</strong>
                            </p>


                            <p>Agar sizdan noma'lum havolani bosib o'tishingiz yoki OLXuz-dagi xabarlardan tashqari boshqa messenjerlarda aloqani davom ettirishni so'rashsa, o’ylab ko’ring, ehtimol,
                                <strong>ushbu inson firibgar/moshennik bo’lishi mumkin.</strong>
                            </p>


                            <br/>
                            <p>
                                <strong>Ushbu takliflarga e'tibor bermang va noma'lum manbalardan fayllarni qabul qilmang.</strong>
                            </p>


                            <p>
                                <span className='text-danger'>
                                    <strong>Sovg'a yutib olganingiz haqida xabar.</strong>
                                </span>
                            </p>


                            <p>
                                Servisimizda foydalanuvchilarga sovg'a yutib olinganligi haqida shaxsiy xabarlar kelishi hodisalari ko'payib bormoqda. 
                                <span className='text-danger'>
                                    <strong>!Biz bunday aksiyalarni, tanlovlarni o'tkazmaymiz</strong>
                                </span>
                                va shaxsiy profilga bildirishnomalar yubormaymiz! 
                                <strong>Sovg'a yutib olganingiz haqida xabarlarga javob bermang va ularda ko'rsatilgan havolalarga o'tmang.</strong>
                                Texnik xodimlarimiz ushbu masalani ko'rib chiqishmoqda.
                            </p>


                            <p className='text-center'>
                                <span>
                                    <strong>Xabarlar shunday ko'rinishda bo'lishi mumkin (xabar matni o'zgarishi mumkin):</strong>
                                </span>
                            </p>


                            <p className='tex-center img'>
                                <img src="https://help.olx.uz/hc/article_attachments/360014746798/Clip2net_201208134558.png" alt="Danger" />
                            </p>

                            <p>
                                <span>3. Noma'lum havolalar orqali o'tilgan taqdirda <strong> hech qachon shaxsiy ma'lumotlaringizni </strong>
                                    (kirish parollari, karta pin-kodlari, SMS parollari va hokazo shunga o'xshash ma’lumotlarni)<strong>kiritmang</strong>
                                    Sizning ma'lumotlaringiz
                                    <span className='text-danger'>
                                        <strong>firibgar/moshenniklarning qo'liga tushib qolishi mumkin.</strong>
                                    </span>
                                </span>
                            </p>

                            <p>
                                <span>
                                    4. <span className='text-danger'><strong>
                                        Havolalarda ishlatiladigan soxta domen nomlariga e'tibor bering!
                                    </strong></span>
                                    <span>Kimdir sizga havola yuborganida uning domen nomiga e’tibor bering! </span>
                                </span>
                            </p>

                            <p>
                                <span>
                                    OLXuz servisining haqiqiy domen nomi quyidagicha:
                                </span>
                            </p>
                            <p>
                                <span>Kompyuter versiyasi uchun -  <strong>www.olx.uz</strong></span>
                            </p>
                            <p>
                                <span>
                                    Mobil versiyasi uchun - <strong>m.olx.uz</strong>
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className='article-votes'>
                        <span>Была ли эта статья полезной?</span>
                        <div className='article-votes-controls'>
                            <button>Да</button>
                            <button>Нет</button>
                        </div>
                        <small>
                            <span>Пользователи, считающие этот материал полезным: 6712 из 7529</span>
                        </small>
                    </div>
                    <ResultSearch/>
                </footer>
            </article>
        </div>
        <Footer/>
    </>
  )
}

export default Container