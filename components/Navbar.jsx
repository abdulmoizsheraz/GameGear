import { color } from 'framer-motion'
import React, { useState,useRef } from 'react'
import { Spacer } from '@chakra-ui/react'
import {BsCartFill} from 'react-icons/bs'
import Link from 'next/link'
import Cart from './Cart'
import { set } from 'mongoose'
const Navbar = () => {
  const categories=["Mouse","Mice","Chairs","Handsets"];
  const [toggle,settoggle]=useState(false)
  const showCart=()=>{
   settoggle(true);
}
  return (
    <>
    <nav>
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
    <div className='sideicons mx-11 '>
      <button onClick={showCart}><BsCartFill/></button>
    </div>
  </nav>
  {toggle && <Cart toggle={toggle} settoggle={settoggle}/>}
    </>

  
  )
}

export default Navbar