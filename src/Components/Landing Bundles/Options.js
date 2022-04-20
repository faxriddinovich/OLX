import React from 'react'

function Options() {
  return (
    <section className='bundles-options'>
        <div className='container'>
            <h3>Siz quyidagi xizmatlardan foydalanishingiz mumkin:</h3>
            <ul className='list-product'>
                <li>
                    <a href="#">
                        <span>
                            <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/no-ads.svg" alt="Logo" />
                        </span>
                        Yuqoriga ko'tarish
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/vas-promotion-on-the-top.svg" alt="Logo" />
                        </span>
                        Topda joylashtirish
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/house.svg" alt="Logo" />
                        </span>
                        VIP-e'lonlar
                    </a>
                </li>
            </ul>
            <p>
            (bosh sahifada joylashtirish) Agar siz koʻproq xaridorlarni jalb qilishni va savdoni yanada oshirishni xohlasangiz OLX da reklamadan foydalaning!
            </p>
        </div>
    </section>
  )
}

export default Options