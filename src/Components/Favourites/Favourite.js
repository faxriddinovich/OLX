import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import Header from '../Header/Header'
import BodySearch from './BodySearch'
import MainFooter from '../Footer/MainFooter'
import Sorted from './Sorted'
import Lastseen from './Lastseen'

function Favourtie() {
  const [sortedVisible,setSortedVisible]=useState(false)
  const [search,setSearch]=useState(true)
  const [lastseen,setLastseen]=useState(false)
  function changeSort(){
    setSearch(false)
    setLastseen(false)
    setSortedVisible(true)
    const x=document.getElementById("search"),y=document.getElementById("sort"),z=document.getElementById("last")
    x.classList.remove("selected")
    y.classList.add("selected")
    z.classList.remove("selected")
  }
  function favourite(){
    setSearch(true)
    setLastseen(false)
    setSortedVisible(false)
    const x=document.getElementById("search"),y=document.getElementById("sort"),z=document.getElementById("last")
    x.classList.add("selected")
    y.classList.remove("selected")
    z.classList.remove("selected")
  }
  function lastSeen(){
    setSearch(false)
    setLastseen(true)
    setSortedVisible(false)
    const x=document.getElementById("search"),y=document.getElementById("sort"),z=document.getElementById("last")
    x.classList.remove("selected")
    y.classList.remove("selected")
    z.classList.add("selected")
  }
  useEffect(()=>{
    setSortedVisible(false)
    setSearch(true)
    setLastseen(false)
    const x=document.getElementById("search"),y=document.getElementById("sort"),z=document.getElementById("last")
    x.classList.add("selected")
    y.classList.remove("selected")
    z.classList.remove("selected")
  },[])
  return (
    <>
      <Header/>
      <div className='searchbox'>
        <div className='wrapper'>
          <div className='clr' id='usertabs'>
            <div className='pageinfo'>
              <h2>Saralangan qidiruv natijalari</h2>
            </div>
            <Nav>
              <NavItem>
                <Link to={'/favourite/'} onClick={changeSort} id='sort'>
                  Saralangan e‘lonlar
                </Link>
              </NavItem>
              <NavItem>
                <Link to={'/favourite/'} id='search' onClick={favourite}>
                  Saralangan qidiruv natijalar
                </Link>
              </NavItem>
              <NavItem>
                <Link to={'/favourite/'} id='last' onClick={lastSeen}>
                  Yaqinda ko'rilganlar
                </Link>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
      {search ? <BodySearch/> :  ''}
      {sortedVisible ?  <Sorted/> : ''}
      {lastseen ? <Lastseen/> : ''}
      <hr/>
      <MainFooter/>
    </>
  )
}

export default Favourtie