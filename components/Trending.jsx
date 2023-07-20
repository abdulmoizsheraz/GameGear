import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import {Trendinggif} from "../public/Trending.gif"
const Display = () => {
  return (
    <div className='DisplayProduct-parent'>
<h2 className='Herohead1' style={{color:"white",textAlign:"center", fontFamily: 'Kelly Slab',
fontSize: "30px"}}>
    <span className='flex items-center justify-center'>Trending<img src="/Trending.gif" className="h-16 rounded-full" alt="" /></span>
    </h2>
<div>

    <div className='DisplayProduct'>
          </div>
      <div className='subdiv-displayProduct'>
      <Carousel

      className='carousel'
      autoPlay={true}
      infiniteLoop={true}
      autoFocus={true}
      showArrows={true}
      showThumbs={false}
      showIndicators={false}
      interval={3000}
      stopOnHover={true}
      dynamicHeight={true}
      >
                <div>
                    <img   style={{height:"100px", width:"100px",marginBottom:"12px"}} src="https://images.pexels.com/photos/6196796/pexels-photo-6196796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div>
                    <img  style={{height:"100px", width:"100px", }} src="https://images.pexels.com/photos/6196797/pexels-photo-6196797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div>
                    <img    style={{height:"100px", width:"100px",}} src="https://images.pexels.com/photos/15925377/pexels-photo-15925377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div>
                    <img  style={{height:"100px", width:"100px",borderRadius:"34px"}}src="https://images.pexels.com/photos/14127564/pexels-photo-14127564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
            </Carousel>
   
      </div>
      </div>
        </div>
  )
}

export default Display