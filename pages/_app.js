import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChakraProvider } from "@chakra-ui/react";
import {useEffect, useState} from "react";
import { store } from '../store/store';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
   return <>
      <Provider store={store}>
    <ChakraProvider>
  <Navbar />
  <Component {...pageProps} />
  <Footer/>
    </ChakraProvider>
      </Provider>
  </>
  
}
