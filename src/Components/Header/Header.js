import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { BiCommentDetail } from "react-icons/bi";
import { BsFillSuitHeartFill,BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const logo=require('../../images/logoOlx.png')

export default function Header() {
  return (
    <div id='header'>
        <header>
            <img src={logo} alt="hoto" className='logo' />
            <Nav>
                <NavItem>
                    <Link to={'/myaccount'}>
                    <BiCommentDetail/>
                    <span>Xabarlar</span>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={'/favourite'}>
                        <BsFillSuitHeartFill/>
                    </Link>
                </NavItem>
                <NavItem>
                        <Link to={'/myaccount'}>
                            <BsFillPersonFill/>
                            <span>Mening profilim</span>
                        </Link>
                </NavItem>
                <NavItem>
                    <Link to={'/myaccount'}>
                        <button className='btn'>
                            <span>E'lon berish</span>
                        </button>
                    </Link>
                </NavItem>
            </Nav>
        </header>
    </div>
  )
}
