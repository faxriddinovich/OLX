import React from 'react'

function Warning() {
  return (
    <div className='messages'>
        <section className='message-alert'>
            <div className='next-message'>
                <div>
                    <b>Будьте бдительны! Избегайте этих схем обмана! / Ehtiyot bo'ling! Ushbu aldov sxemalaridan qoching!</b>
                </div>
                <div className='link'>
                    <a href="#">
                        Узнать больше / Batafsil ma‘lumot
                    </a>
                </div>
            </div>
        </section>
        <section className='message-info'>
            <div className='next-message'>
                <div>
                    <b>Напишите нам! / Teskari aloqa!</b>
                </div>
                <div className='link'>
                    <a href="#">
                        Узнать больше / Batafsil ma‘lumot
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Warning