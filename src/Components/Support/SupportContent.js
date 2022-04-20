import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Warning from '../Warning/Warning'
import Articles from './Articles'
import SupportFooter from './SupportFooter'
const {support}=require('../DB/Fake_Data_Base')

function SupportContent() {
    console.log(support)
  return (
    <>
        <section id='support-content'>
            <div className='hero-inner'>
                <h1>Qanday yordam berishimiz mumkin?</h1>
                <div className='search'>
                    <FaSearch/>
                    <form>
                        <input type="text" placeholder='Mijozlarga yordam markazidan qidirish' />
                    </form>
                </div>
            </div>
        </section>
        <Warning/>
        <section className='categories'>
            <div className='row'>
                {support.map(item=><div className='col-md-4' key={item.id}>
                    <div className='block-item'>
                        <div className='block-image'>
                            <img src={item.img} alt="Logo" />
                        </div>
                        <Link to={item.path}>
                            <h4>{item.head}</h4>
                            <p>{item.title}</p>
                        </Link>
                    </div>
                </div>)}
            </div>
        </section>
        <Articles/>
        <h3>Не можете найти то, что искали?</h3>
        <section className='categories-block'>
            <button className='block-button'>
                <img src="https://theme.zdassets.com/theme_assets/759275/a5b2f21af537ebe14620b670ea9b950dc6080d96.svg" alt="Logo" />
                <div className='block-link'>
                    <Link to={'requests'}>Напишите нам</Link>
                </div>
            </button>
        </section>
        <hr/>
        <SupportFooter/>
    </>
  )
}

export default SupportContent