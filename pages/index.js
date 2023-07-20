import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Display from '@/components/Display';
import Trending from '@/components/Trending';
import Cart from '@/components/Cart';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>GameGear-Customize your GameSpace</title>
        <meta name="description" content="Gamegear.com-Customize Your Gamespace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Dancing+Script&family=Gajraj+One&family=Kelly+Slab&display=swap" rel="stylesheet"></link>
      </Head>
<main>
<Hero/>
<Display/>
<Trending/>
</main>
    </>
  )
}
