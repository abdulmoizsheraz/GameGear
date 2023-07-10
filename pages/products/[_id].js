import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Chairs } from "../../utilities/Products/Chair";

const Slug = ({ }) => {
  const router = useRouter();
  const { _id } = router.query;
  const [productdata, setproductdata] = useState({});
  const getData = (_id) => {
    const data = Chairs.find((chair) => chair._id === _id);
    setproductdata(data);
    console.log(productdata);
  };

  useEffect(() => {
    if (_id) {
      getData(_id);
    }
  }, [_id]);

  return (
    <>
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2  lg:h-auto h-64  rounded"
              src={productdata.image}
             style={{objectFit: "contain"}}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-white-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-white-900 text-3xl title-font font-medium mb-1">{productdata.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  {/* Additional rating SVGs */}
                </span>
                <span className="text-white-600 ml-3">4 Reviews</span>
              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery...</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-white-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-white-300 ml-1 bg-white-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-white-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
              </div>
              <Button
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg={useColorModeValue('gray.900', 'gray.100')}
                color={useColorModeValue('white', 'gray.900')}
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;
