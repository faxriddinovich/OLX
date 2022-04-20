import React from 'react'
import { Nav, NavItem } from 'reactstrap'

function LoginRegistr() {
    function login(){
        const x=document.getElementById("loginpage"),y=document.getElementById("registrpage"),a=document.getElementById("signbtn"),b=document.getElementById("signupbtn");
        x.style.display="block"
        y.style.display="none"
        a.classList.add("activenbtn")
        b.classList.remove("activenbtn")
    }
    function registr(){
        const x=document.getElementById("loginpage"),y=document.getElementById("registrpage"),a=document.getElementById("signbtn"),b=document.getElementById("signupbtn");
        x.style.display="none"
        y.style.display="block"
        a.classList.remove("activenbtn")
        b.classList.add("activenbtn")
    }
  return (
    <div className='sect'>
        <div className='login-form'>
            <div className='login-tabs'>
                <Nav>
                    <NavItem id='signbtn' className='activenbtn'>
                        <button onClick={login}>Tizimga kirish</button>
                    </NavItem>
                    <NavItem id='signupbtn'>
                        <button onClick={registr}>Ro'yxatdan o'tish</button>
                    </NavItem>
                </Nav>
                <ul className='login-tabs-content'>
                    <li id='loginpage'>
                        <div className='loginform'>
                            <form>
                                <div className='fblock'>
                                    <label>Email yoki telefon raqami</label><br/>
                                    <input type="text" placeholder='Email yoki telefon raqam' />
                                </div>
                                <div className='fblock' id='pass'>
                                    <label>Sizning OLX dagi parolingiz</label><br/>
                                    <input type="password" placeholder='Password' />
                                </div>
                                <div className='removeNumber'>
                                    <a href="#">yangi parolni yaratish</a>
                                </div>
                                <button className='submit'>Tizimga kirish</button>
                            </form>
                            <p>Mening profilim bo'limiga kirib <a href="#">Foydalanish shartlari</a>ni qabul qilasiz</p>
                        </div>
                    </li>
                    <li id='registrpage'>
                        <div className='loginform'>
                            <form>
                                <div className='fblock'>
                                    <label>Email yoki telefon raqamni kiriting</label><br/>
                                    <input type="text" placeholder='Email yoki telefon raqam' />
                                </div>
                                <div className='fblock' id='pass'>
                                    <label>O'z parolingizni parolingizni kiriting</label><br/>
                                    <input type="password" placeholder='Password' />
                                </div>
                                <div className='removeNumber'>
                                    <input type="checkbox" className='check' /><label> OLX.uz qoidalarini qabul qilaman <a href="#">OLX.uz foydalanish shartlari.</a></label>
                                </div>
                                <button className='submit'>Ro'yxatdan o'tish</button>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default LoginRegistr