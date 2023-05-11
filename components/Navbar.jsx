import { color } from 'framer-motion'
import React, { useState,useRef } from 'react'
import { Spacer } from '@chakra-ui/react'
import {BsCartFill} from 'react-icons/bs';
import {ToastContainer } from 'react-toastify';
import Link from 'next/link'
import Cart from './Cart'
import { set } from 'mongoose'
import Signup from './Signup'
import Login from './Login'
const Navbar = () => {
  const categories=["Mouse","Mice","Chairs","Handsets"];
  const [toggle,settoggle]=useState(false)
  const [signup,setsign]=useState(false)
  const [login,setlogin]=useState(false)
  const showCart=()=>{
   settoggle(true);
}
const showloginsignup=()=>{
 if(signup ==false){
  setsign(true);
 }else{
  setsign(false);
 }
}
const showlogin=()=>{
  if(login ==false){
    setlogin(true);
   }else{
    setlogin(false);
   }
}
  return (
    <>
    <nav className='Navbar'>
      <div>
      <h1>GameGear</h1>
      </div>
    <ul>
     { categories.map((category)=>(
       <Link href={`${category}`}>
       <li>{category}</li>
       </Link> 
      ))}
    </ul>
    <Spacer/>
    <div className='sideicons mx-8 '>
      <button onClick={showCart}><BsCartFill/></button>
    </div>
      <span className='div-loginSignup'>
      <button className='btn-signup' onClick={showloginsignup}>Signup</button>
      <button className='btn-login' onClick={showlogin}>Login</button>
      </span>
  </nav>
  {toggle && <Cart toggle={toggle} settoggle={settoggle}/>}
  {signup && <Signup signup={login}  setsign={setlogin}/>}
  {login && <Login login={login} setlogin={setlogin}/>}
    </>

  
  )
}

export default Navbar