import React from 'react'
import { Link } from 'react-router-dom'

function ResultSearch() {
  return (
    <div className='not-result'>
        <h3>Не можете найти то, что искали?</h3>
        <section className='categories-block'>
            <button className='block-button'>
                <img src="https://theme.zdassets.com/theme_assets/759275/a5b2f21af537ebe14620b670ea9b950dc6080d96.svg" alt="Logo" />
                <div className='block-link'>
                    <Link to={'requests'}>Напишите нам</Link>
                </div>
            </button>
        </section>
    </div>
  )
}

export default ResultSearch