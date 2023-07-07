import { Flex, Spacer } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse, Box, Stack } from '@chakra-ui/react'
import { MdExpandCircleDown } from 'react-icons/md';
import Link from 'next/link';
import { Image } from '@chakra-ui/react'
import AddtoCartbtn from './AddtoCartbtn'
import {
    Tag
} from '@chakra-ui/react'
import { useState } from 'react'
const ShoppingCard = ({ image, price, title, category, id }) => {
    const [hovered, sethoverd] = useState(false)
    return (
        <>
            <Flex flexDirection="column" margin="6"
                position="relative"
                borderRadius="10"
                justifyContent="center"
                alignItems="center"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                cursor="pointer" w="300px" h="350px"
                onMouseEnter={() => { sethoverd(true) }}
                onMouseLeave={() => { sethoverd(false) }}
                bg="white"
                color={"blackAlpha.100"}
                backdropFilter='4px'
                borderColor="rgba(255, 250, 250, 0.13)"
            //   webkitBackdropFilter="blur(10px)"
            >
                <Tag borderRadius="0" className="rounded-none" size="md" position="absolute" top="0" left="0" variant='subtle' colorScheme='red'>
                    {category}
                </Tag>
                {hovered ? <AddtoCartbtn hover={hovered} sethoverd={sethoverd}
                    title={title}
                    image={image}
                    price={price}
                    id={id}
                /> :
                    <>
                        <img src={image} style={{ height: "250px", width: "250px" ,objectFit: "contain"}} />
                    </>
                }
                <h3 className='productname text-black'>{title}</h3>
                <p className='productprice text-black font-bold'>$ {price}</p>
               <Link href={`/products/${id}`} className='expandbtn text-gray font-bold'><MdExpandCircleDown color='red'  size={40} /></Link>
            </Flex>

        </>
    )
}

export default ShoppingCard