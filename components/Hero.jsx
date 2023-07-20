import React,{useEffect,useRef,useState} from 'react'
import Link from 'next/link'
const Hero = () => {
  const span1=useRef(null)
  const span2=useRef(null)
  const span3=useRef(null)
  
  return (
    <div className='Hero'>
    <h1 className='Herohead'> 
      <span ref={span1}>Customize </span>
      <span ref={span2}>Your </span>
      <span ref={span3}>GameSpace</span>
       </h1>
    <Link  href='/Mouse' className='shopNow'>Shop Now</Link>
</div>
  )
}

export default Hero