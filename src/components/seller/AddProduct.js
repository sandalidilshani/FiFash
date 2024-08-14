'use client';
import { createNewProduct, getData } from '@/api/graphql';
import React, { useEffect, useState } from 'react';

export default function AddProduct({ closeAddProductModal }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    color: '',
    size: '',
    gender: '',
    collection: '',
    status: '',
    image: null,
  });

  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [genders, setGenders] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getData();
      setCategories(data.categories);
      setCollections(data.collections);
      setColors(data.colors);
      setGenders(data.genders);
      setSizes(data.sizes);
      setStatuses(data.statuses);

    }
    loadData();
  }, []);
  // const uploadImage = async (file) => {
  //   Your logic to upload the image and return its ID
  //   For example, using a custom API or Hygraph asset upload endpoint
  //   Return the image ID once uploaded
  // };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {

      name: formData.name,
      description: formData.description,
      price: parseInt(formData.price, 10),
      categories: {
        connect: formData.category ? [{ id: formData.category }] : [],
      },
      collections: {
        connect: formData.collection ? [{ id: formData.collection }] : [],
      },
      variants: {connect:
        [{ProductColorVariant: {id: "clzptuv0618aw07pnihuw4ofh"}},
        {ProductSizeVariant: {id: "clz0tubjz06kn07pp7cgxszn8"}}, 
        {ProductVariantGender: {id: "clzp7ue640yic07pnsjifb2qr"}}]},
      sellingStatus: { connect: { id: formData.status } },
      //images: formData.image ? formData.image.map(image => ({ id: image })) : [],
    };

    try {
      console.log('Product data:', productData);
      const result = await createNewProduct(productData);
      console.log('add product', result)
      closeAddProductModal(); // Close the modal after successful submission

    } catch (error) {
      console.error('Error adding product:', error);
    }
  };


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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="color">Color</label>
            <select
              id="color"
              name="color"
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            >
              <option value="">Select Color</option>
              {colors.map((color) => (
                <option value={color.id} key={color.id}>{color.color}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="size">Size</label>
            <select
              id="size"
              name="size"
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            >
              <option value="">Select Size</option>
              {sizes.map((size) => (
                <option value={size.id} key={size.id}>{size.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            >
              <option value="">Select Gender</option>
              {genders.map((gender) => (
                <option value={gender.id} key={gender.id}>{gender.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="collection">Collection</label>
            <select
              id="collection"
              name="collection"
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            >
              <option value="">Select Collection</option>
              {collections.map((collection) => (
                <option value={collection.id} key={collection.id}>{collection.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="status">Selling Status</label>
            <select
              id="status"
              name="status"
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              required
            >
              <option value="">Select Status</option>
              {statuses.map((status) => (
                <option value={status.id} key={status.id}>{status.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="image">Product Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
              className="w-full border-brown border-2 rounded-lg p-2"
              multiple
            />
          </div>
          <button type="submit" className="bg-brown text-white px-4 py-2 rounded-lg">Add Product</button>
        </form>
      </div>
    </div>
  );
}
