// pages/seller/products/[product]/page.js

'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductModal from '@/components/customer/Product';

export default function ProductPage({ params }) {
  const products = [
    { src: '/product1.jpeg', alt: 'Product 1', price: '$140', oldPrice: '$100',feedback: [
      { rating: 5, author: 'John Doe', comment: 'Great product!' },
      { rating: 4, author: 'Jane Smith', comment: 'Very good, but could be improved.' }
    ] },
    { src: '/product1.jpeg', alt: 'Product 1', price: '$140', oldPrice: '$100' },
    { src: '/product2.jpeg', alt: 'Product 2', price: '$140', oldPrice: '$100' },
    { src: '/product3.jpeg', alt: 'Product 3', price: '$140', oldPrice: '$100' },
    { src: '/product4.jpeg', alt: 'Product 4', price: '$140', oldPrice: '$100' },
    { src: '/product5.jpeg', alt: 'Product 5', price: '$140', oldPrice: '$100' },
    { src: '/product6.jpeg', alt: 'Product 6', price: '$140', oldPrice: '$100' },
    { src: '/product7.jpeg', alt: 'Product 7', price: '$140', oldPrice: '$100' },
    { src: '/product08.jpeg', alt: 'Product 8', price: '$140', oldPrice: '$100',feedback: [
      { rating: 5, author: 'John Doe', comment: 'Great product!' },
      { rating: 5, author: 'John Doe', comment: 'Great product!' },
      { rating: 5, author: 'John Doe', comment: 'Great product!' },
      { rating: 5, author: 'John Doe', comment: 'Great product!' },
      { rating: 4, author: 'Jane Smith', comment: 'Very good, but could be improved.' }
    ] },  ];

  const { category } = params;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-6 capitalize">
            Our Products for {category}
          </h2>
          <div className="w-full max-w-4xl mb-8">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg font-medium">
              <li><Link href="#" className="hover:underline">Hot</Link></li>
              <li><Link href="#" className="hover:underline">ON SALE</Link></li>
              <li><Link href="#" className="hover:underline">TRENDING NOW</Link></li>
              <li><Link href="#" className="hover:underline">NEW ARRIVAL</Link></li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(product)}
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={640}
                  height={284}
                  className="w-full h-[17.8rem] object-cover"
                />
                <div className="p-4 flex justify-center flex-col">
                  <div className="flex text-yellow-400 mb-2">★★★★★</div>
                  <p className="font-semibold text-lg mb-2">{product.alt}</p>
                  <div className="flex justify-evenly items-center">
                    <p className="font-bold">{product.price}</p>
                    <p className="line-through text-gray-500">{product.oldPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}
