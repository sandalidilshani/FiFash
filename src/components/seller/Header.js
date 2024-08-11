import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <header className="w-full px-8 lg:px-32 pt-10 flex justify-between bg-pink text-brown flex-wrap items-center">
        <div>
          <p className="text-3xl font-bold capitalize">FIFASH </p>
        </div>
        <nav className="space-x-4 lg:space-x-9">
          <ul className="flex flex-row gap-4 flex-wrap lg:gap-9 text-xl lg:text-2xl font-black sm:text-xs">
            <li><Link href="#add-product">Add Product</Link></li>
            <li><Link href="#view-products">View Products</Link></li>
            <li><Link href="#view-orders">View Orders</Link></li>
            <li><Link href="#settings">Settings</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-5 mt-4 lg:mt-0">
      <div className="relative">
        <span className="absolute -top-2 right-0 bg-red-600 text-white text-sm rounded-full px-2">1</span>
        <Image src="/shopping-cart.svg" alt="Cart Icon" width={32} height={32} />
      </div>
      <button className="border border-brown px-4 py-2 w-34 h-12 font-bold text-sm" >LOGIN AS Buyer</button>
    </div>
      </header>
    </div>
  )
}
