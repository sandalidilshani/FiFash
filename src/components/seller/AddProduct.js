import React from 'react';

export default function AddProduct({ closeAddProductModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeAddProductModal}></div>
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-8 overflow-y-auto max-h-screen">
        <button
          onClick={closeAddProductModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-6">Add New Product</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" name="product-name" className="w-full border-brown border-2 rounded-lg p-2" required />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-category">Category</label>
            <input type="text" id="product-category" name="product-category" className="w-full border-brown border-2 rounded-lg p-2" required />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-description">Description</label>
            <textarea id="product-description" name="product-description" className="w-full border-brown border-2 rounded-lg p-2" required></textarea>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-price">Price</label>
            <input type="number" id="product-price" name="product-price" className="w-full border-brown border-2 rounded-lg p-2" required />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-color">Color</label>
            <input type="text" id="product-color" name="product-color" className="w-full border-brown border-2 rounded-lg p-2" required />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-size">Size</label>
            <input type="text" id="product-size" name="product-size" className="w-full border-brown border-2 rounded-lg p-2" required />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-gender">Gender</label>
            <select id="product-gender" name="product-gender" className="w-full border-brown border-2 rounded-lg p-2" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-collection">Collection</label>
            <select id="product-collection" name="product-collection" className="w-full border-brown border-2 rounded-lg p-2" required>
              <option value="summer">Summer Collection</option>
              <option value="winter">Winter Collection</option>
              <option value="autumn">Autumn Collection</option>
              <option value="spring">Spring Collection</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-status">Selling Status</label>
            <select id="product-status" name="product-status" className="w-full border-brown border-2 rounded-lg p-2" required>
              <option value="available">Available</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="product-image">Product Image</label>
            <input type="file" id="product-image" name="product-image" className="w-full border-brown border-2 rounded-lg p-2" />
          </div>
          <button type="submit" className="bg-brown text-white px-4 py-2 rounded-lg">Add Product</button>
        </form>
      </div>
    </div>
  );
}
