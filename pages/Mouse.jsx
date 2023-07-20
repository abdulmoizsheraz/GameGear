import {useRef,useState} from 'react'
import Link from 'next/link';
import {Mousedata} from "../utilities/Products/Mouse"
import { Fade, ScaleFade, Slide, SlideFade, Collapse,Box,Stack,Flex} from '@chakra-ui/react'
import ShoppingCard from '@/components/ShoppingCard';
import {
  Tag
} from '@chakra-ui/react'
import SearchBar from '@/components/SearchBar';
const Mouse = () => {
  // let Mouses=Mousedata.products;
  const shoppingcardref=useRef(null)
  const [hovered,sethovered]=useState()
 const hovereddiv={
  backgroundColor:"white",
  color:""
 }
  return (
    <>
    <SearchBar/>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap m-4 ">
        
{Mousedata.map(({title,image,price,category,_id})=>(
  <>
<ShoppingCard 
title={title}
image={image}
price={price}
category={category}
_id={_id}
/>

  </>

))}

</div>
</div>
  </section>
</>
  )
}

export default Mouse;
