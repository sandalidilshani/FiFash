// components/customer/ProductModal.js

import { useState } from 'react';
import Image from 'next/image';

export default function ProductModal({ product, isOpen, onClose }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2;
  const reviews = product.feedback || [];

  if (!isOpen) return null;

  const handleAddToCart = () => {
    console.log('Added to cart:', { ...product, selectedSize, selectedColor, selectedQuantity });
    onClose();
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg mx-4 w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-red-500 text-2xl">
          ×
        </button>
        <div className="flex flex-col sm:flex-row">
          <Image
            src={product.src}
            alt={product.alt}
            width={320}
            height={284}
            className="w-full sm:w-1/2 h-auto object-cover"
          />
          <div className="sm:ml-6 mt-4 sm:mt-0">
            <h2 className="text-2xl font-semibold mb-2">{product.alt}</h2>
            <p className="text-lg font-bold mb-2">{product.price}</p>
            <div className="mb-4">
              <label htmlFor="size" className="block text-sm font-medium mb-1">Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              >
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="color" className="block text-sm font-medium mb-1">Color:</label>
              <select
                id="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              >
                <option value="">Select Color</option>
                <option value="B">Black</option>
                <option value="R">Red</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium mb-1">Quantity:</label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
            >
              Add To Cart
            </button>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
              {product.feedback && product.feedback.length > 0 ? (
                <>
                  <ul className="space-y-4">
                    {currentReviews.map((review, index) => (
                      <li key={index} className="border-t pt-2">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">{'★'.repeat(review.rating)}</div>
                          <p className="ml-2 font-semibold">{review.author}</p>
                        </div>
                        <p className="text-sm">{review.comment}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center  mt-4 space-x-4">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      className="bg-gray-300 px-4 py-2 rounded"
                      disabled={currentPage === 1}
                    >
                      
                    </button>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      className="bg-gray-300 px-4 py-2 rounded"
                      disabled={currentPage === totalPages}
                    >
              
                    </button>
                  </div>
                </>
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
