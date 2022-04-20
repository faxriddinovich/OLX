import React from 'react'
import { BsCheck2 } from "react-icons/bs";

function ContentBundle() {
  return (
    <section className='bundles-content'>
        <div className='container'>
            <h3 id='service'>
                Pullik xizmatlar toʻplami
                <span>Yangilik</span>
            </h3>
            <p className='bundles-text'>
                Endi sizning eʼloningiz uchun qaysi xizmat yaxshiroq natija berishi haqida oʻylab oʻtirishingizga xojat yoʻq. Endi faqat uni qay darajada koʻzga tashlanadigan qilish va qanchalar tezroq bitim tuzish istagida ekaningiz toʻgʻrisida qaror qabul qilsangiz bas!
            </p>
            <ul className='bundles-boxes'>
                <li>
                    <div className='bundle-item'>
                        <h4>Oson start</h4>
                        <div className='inner'>
                            <div className='strong-text'>
                                <strong>16x</strong> Marta koʼproq koʼrishlar
                            </div>
                            <ul className='components'>
                                <li>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div>Top-eʼlon 3 kunga</div>
                                    </div>
                                </li>
                                <li className='disabled'>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div className='hide-text'>Roʼyxat tepasiga koʼtarish</div>
                                    </div>
                                </li>
                                <li className='disabled'>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div className='hide-text'>VIP-eʼlon</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='bundle-item'>
                        <h4>Tezkor savdo</h4>
                        <div className='inner'>
                            <div className='strong-text'>
                                <strong>30x</strong> Marta koʼproq koʼrishlar
                            </div>
                            <ul className='components'>
                                <li>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div>Top-eʼlon 3 kunga</div>
                                    </div>
                                </li>
                                <li>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div>Roʼyxat tepasiga koʼtarish</div>
                                    </div>
                                </li>
                                <li className='disabled'>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div className='hide-text'>VIP-eʼlon</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='bundle-item'>
                        <h4>Turbo savdo</h4>
                        <div className='inner'>
                            <div className='strong-text'>
                                <strong>4x</strong> Marta koʼproq koʼrishlar
                            </div>
                            <ul className='components'>
                                <li>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div>Top-eʼlon 3 kunga</div>
                                    </div>
                                </li>
                                <li>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div>Roʼyxat tepasiga koʼtarish</div>
                                    </div>
                                </li>
                                <li>
                                    <div className='main-item'>
                                        <div className='icon'>
                                            <BsCheck2/>
                                        </div>
                                        <div>VIP-eʼlon</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default ContentBundle