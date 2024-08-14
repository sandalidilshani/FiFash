'use client'

import Image from 'next/image';
import Link from 'next/link';
import LoginSignup from './LoginSignup';
import React, { useState } from 'react'
export default function Header  () {
  const [isLoginSignUp,setisLoginSignUp]=useState(false)
  const openloginSignup=()=>{
    console.log('open')
    setisLoginSignUp(true)
  }
  const closeloginSignup=()=>{
    setisLoginSignUp(false)
    console.log('close')
  }
  
  return(
    <>
  <header className="w-full px-8 lg:px-32 pt-10 flex justify-between bg-pink text-brown flex-wrap items-center">
    <div>
      <p className="text-3xl font-bold capitalize">FIFASH</p>
    </div>
    <nav className="space-x-4 lg:space-x-9">
      <ul className="flex flex-row gap-4 flex-wrap lg:gap-9 text-xl lg:text-2xl font-black sm:text-xs">
        <li><Link href="/customer/categories/men">Men</Link></li>
        <li><Link href="/customer/categories/women">Women</Link></li>
        <li><Link href="/customer/categories/kids">Kids</Link></li>
        <li><Link href="/customer/categories/collection">Collection</Link></li>
        <li><Link href="/customer/categories/trends">Trends</Link></li>
      </ul>
    </nav>
    <div className="flex items-center space-x-5 mt-4 lg:mt-0">
      <div className="relative">
        <span className="absolute -top-2 right-0 bg-red-600 text-white text-sm rounded-full px-2">1</span>
        <Image src="/shopping-cart.svg" alt="Cart Icon" width={32} height={32} />
      </div>
      <button className="border border-brown px-4 py-2 w-24 h-12 font-bold" onClick={openloginSignup}>LOGIN</button>
    </div>
  </header>
  
  <LoginSignup isOpen={isLoginSignUp} onClose={closeloginSignup}/>
  </>

);

}
