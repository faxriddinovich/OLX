import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Products from './Products'
import Search from './Search'
import TopBar from './TopBar'

function Home() {
  const [visible,setVisible]=useState(true)
  let lastscroll=0;
  const header=document.getElementById("header");
  const scrollPosition=()=>window.pageYOffset || document.documentElement.scrollTop
  const containHide = () => header.classList.contains('hide');

  useEffect(()=>{
    setVisible(true)
    window.addEventListener("scroll",()=>{
      if(scrollPosition>lastscroll){
          header.classList.add("hide")
      }
      else if(scrollPosition() < lastscroll && containHide()){
          header.classList.remove("hide")
      }
      lastscroll=scrollPosition
  })
  },[])
  return (
    <div>
        <Header/>
        {visible ? <TopBar visible={visible} change={setVisible}/> : ''}
        <Search/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home