import React from 'react'
import { Link } from 'react-router-dom'

function BundlePromote() {
  return (
    <section className='bundles-promote'>
        <div className='container'>
            <ul>
                <li className='new'>
                    <h5>Yangi eʼlon joylashtirish va reklama qilish</h5>
                    <Link to={'/myaccount'} target='_blank'>Eʼlon joylashtirish</Link>
                </li>
                <li className='content'>
                    <h5>Mavjud eʼlonni reklama qilish</h5>
                    <Link to={'/myaccount'} target='_blank'>Mening profilimga oʻtish</Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default BundlePromote