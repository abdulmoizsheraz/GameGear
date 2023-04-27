import { Flex, Spacer } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse,Box,Stack} from '@chakra-ui/react'

import { Image } from '@chakra-ui/react'
import AddtoCartbtn from './AddtoCartbtn'
import {
    Tag
  } from '@chakra-ui/react'
import { useState } from 'react'
const ShoppingCard = ({ image, price, title,category,id }) => {
    const [hovered, sethoverd] = useState(false)
    return (
        <>

        <Flex flexDirection="column" margin="6"
        position="relative"
            borderRadius="10"
            justifyContent="center"
            alignItems="center"
            boxShadow="rgba(120, 118, 118, 0.3) 0px 19px 38px, rgba(42, 42, 42, 0.22) 0px 15px 12px"
            cursor="pointer" w="300px" h="350px"
            onMouseEnter={() => { sethoverd(true) }}
            onMouseLeave={() => { sethoverd(false) }}
            bg="black"
            backdropFilter='4px'
            borderColor="rgba(255, 250, 250, 0.13)"
            //   webkitBackdropFilter="blur(10px)"
        >
             <Tag size="md" position="absolute" top="0" left="0" variant='subtle' colorScheme='red'>
        {category}
        </Tag>
            {hovered ? <AddtoCartbtn hover={hovered} sethoverd={sethoverd}  
            title={title}
            image={image}
            price={price}
            id={id}

            
            /> :
                <>
                    <img src={image} style={{height:"250px" ,width:"250px"}} />
                </>
            }
            <h3 className='productname'>{title}</h3>
            <p className='productprice'>Price:₨ {price}</p>

        </Flex>
        
            </>
    )
}

export default ShoppingCard