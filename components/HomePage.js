//Import Components
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Head from 'next/head'
import Navbar from './Navbar';
import Footer from './Footer';
import Services from './Services';
import Clients from './Clients';
import AboutUs from './AboutUs';


export default function HomePage(){
    return(
        <div className={styles.container}>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <main>
          <div className={styles.heros}>
            {/* <Image src='images/logo.png' /> */}
            {/* <h1>Home content</h1> */}
            <Image src='/images/hero_image.jpg' alt='' height='750' width='1600' objectFit="cover"/>
          </div>
          <Services/>
          <Clients/>
          <AboutUs/>
        </main>
        <Footer/>
      </div>
      
    )
}