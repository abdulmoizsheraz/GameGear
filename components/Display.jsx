import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Display = () => {
  return (
    <div className='DisplayProduct-parent' style={{padding:"23px"}}>
<h1 className='Herohead' style={{color:"white",textAlign:"center", fontFamily: 'Kelly Slab',
fontSize: "50px"}}><span style={{"color":"red"}}>GameSpace</span> of Our Buyers</h1>
<div>

    <div className='DisplayProduct'>
          </div>
      <div className='subdiv-displayProduct'>
      <Carousel
      className='carousel'
      autoPlay={true}
      width="50%"
      infiniteLoop={true}
      autoFocus={true}
      showArrows={false}
      showThumbs={false}
      showIndicators={false}
      interval={3000}
      stopOnHover={true}
      emulateTouch={true}
      showStatus={false}
      dynamicHeight={true}
      >
                <div>
                    <img   style={{height:"500px", width:"500px",borderRadius:"34px",marginBottom:"12px"}} src="https://images.pexels.com/photos/6196796/pexels-photo-6196796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div>
                    <img  style={{height:"500px", width:"500px",borderRadius:"34px" }} src="https://images.pexels.com/photos/6196797/pexels-photo-6196797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div>
                    <img    style={{height:"500px", width:"500px",borderRadius:"34px"}} src="https://images.pexels.com/photos/15925377/pexels-photo-15925377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div>
                    <img  style={{height:"500px", width:"500px",borderRadius:"34px"}}src="https://images.pexels.com/photos/14127564/pexels-photo-14127564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
            </Carousel>
   
      </div>
      </div>
        </div>
  )
}

export default Display