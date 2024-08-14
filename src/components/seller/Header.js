
'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import AddProduct from './AddProduct';
import { useState } from 'react';

export default function Header() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const openAddProductModal = () => {
    setIsAddProductOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductOpen(false);
  };
  return (
    <div>
      <header className="w-full px-8 lg:px-32 pt-10 flex justify-between bg-pink text-brown flex-wrap items-center">
        <div>
          <p className="text-3xl font-bold capitalize">FIFASH </p>
        </div>
        <nav className="space-x-4 lg:space-x-9">
          <ul className="flex flex-row gap-4 flex-wrap lg:gap-9 text-xl lg:text-2xl font-black sm:text-xs">
            <li><button onClick={openAddProductModal}>Add Product</button></li>
            <li><Link href="seller/store">View Products</Link></li>
            <li><Link href="#view-orders">View Orders</Link></li>
            <li><Link href="#settings">Settings</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-5 mt-4 lg:mt-0">
      <div className="relative">
        <span className="absolute -top-2 right-0 bg-red-600 text-white text-sm rounded-full px-2">1</span>
        <Image src="/shopping-cart.svg" alt="Cart Icon" width={32} height={32} />
      </div>
      <button className="border border-brown px-4 py-2 w-34 h-12 font-bold text-sm" >
        <Link href="/">LOGIN AS Buyer
        </Link></button>
    </div>
      </header>
      {isAddProductOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-7 m-4 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeAddProductModal}
            >
              &times;
            </button>
            <AddProduct closeAddProductModal={closeAddProductModal} />
          </div>
        </div>
      )}  
      
          </div>
  )
}
