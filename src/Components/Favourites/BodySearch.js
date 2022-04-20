import React from 'react'

function BodySearch() {
  return (
    <>
        <section id='body-container'>
            <div className='wrapper'>
                <div id='content'>
                    <div className='noresult'>
                        <div className='emptybox'>
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2ffba693dfa8accb512ba48fe4cc53a230.svg" alt="No result" />
                            <h2>You don't have saved searches</h2>
                            <p className='large'>
                                Siz qidirish maydoniga yuqoridan shuningdek, reklama ro‘yxatining quyidan sahifada qidirish natijalarini saqlashingiz mumkin
                            </p>
                            <p>Saralangan qidiruv natijalari profilingizda Mening e‘lonlarimga kirganingizdan so‘ng saqlanadi</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BodySearch