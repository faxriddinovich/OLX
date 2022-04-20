import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Header from '../Header/Header'
import MainFooter from '../Footer/MainFooter'
import LoginRegistr from './LoginRegistr'

function Account() {
    
  return (
    <div className='myaccount'>
        <Header/>
        <LoginRegistr/>
        <hr/>
        <MainFooter/>
    </div>
  )
}

export default Account