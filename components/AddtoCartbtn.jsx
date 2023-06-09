import { Fade, ScaleFade, Slide, SlideFade, Collapse,Box,Stack,Flex} from '@chakra-ui/react'
import {AiFillHeart} from 'react-icons/ai';
import { BsCartPlusFill } from 'react-icons/bs';
import { Button} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addtocart } from '../store/Slices/CartSlice';
const AddtoCartbtn = ({hover,_id, title, price,image }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Added to Cart");
  const handleaddToCart=()=>{
    notify();
    dispatch(addtocart({ _id, title, price,image }));
  }
  return (
    <>
    <SlideFade in={hover} offsetY='20px' className='bg-red'>
        <Box
          p='40px'
          color='white'
          mt='4'
          width="300px"
        >
         <Stack direction='row' spacing={4}>
  <Button leftIcon={<AiFillHeart />} colorScheme='red' variant='solid'>
   Save
  </Button>
  <Button rightIcon={<BsCartPlusFill />} onClick={handleaddToCart}
   colorScheme='green' variant='outline'>
    Add to Cart
  </Button>
</Stack>
        </Box>
      </SlideFade>
      <ToastContainer/>
    </>
  )
}

export default AddtoCartbtn