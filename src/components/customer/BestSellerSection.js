// components/BestSeller.js
import Image from 'next/image';

const BestSellerSection = () => (
  <section id="best-seller">
    <div className="flex flex-row bg-brown w-full text-white px-40 py-20 max-md:flex-col max-md:px-10 max-md:items-center">
      <div className="flex flex-col gap-10 justify-start max-md:items-center">
        <p className="font-bold text-5xl leading-10">Best Seller Product</p>
        <p className="font-normal leading-9 text-xl w-[300px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros
        </p>
        <button className="bg-transparent border border-white text-white py-2 px-4 uppercase text-sm transition duration-300 w-[12rem]">
          See More
        </button>
      </div>
      <div className="flex flex-row gap-6 w-2/3 max-md:flex-col max-md:pt-5">
        <div className="bg-white text-brown-800 rounded-lg overflow-hidden">
          <Image 
            src="/bestseller01.jpeg" 
            alt="Woman in black shirt" 
            width={640} 
            height={256} 
            className="w-full h-64 object-cover" 
          />
          <div className="p-4">
            <div className="flex text-yellow-400 mb-2">★★★★★</div>
            <p className="font-semibold text-lg mb-2">Pastel Long Sleeve</p>
            <div className="flex justify-between items-center">
            <p className="font-bold text-black">$140</p>
            <p className="line-through text-gray-500">$100</p>
            </div>
          </div>
        </div>
        <div className="bg-white text-brown-800 rounded-lg overflow-hidden">
          <Image 
            src="/bestseller02.jpeg" 
            alt="Woman in white top" 
            width={640} 
            height={256} 
            className="w-full h-64 object-cover" 
          />
          <div className="p-4">
            <div className="flex text-yellow-400 mb-2">★★★★★</div>
            <p className="font-semibold text-lg mb-2">Pastel Long Sleeve</p>
            <div className="flex justify-between items-center">
            <p className="font-bold text-black">$140</p>
            <p className="line-through text-gray-500">$100</p>
            </div>
          </div>
        </div>
        <div className="bg-white text-brown-800 rounded-lg overflow-hidden">
          <Image 
            src="/bestseller03.jpeg" 
            alt="Woman in light colored top" 
            width={640} 
            height={256} 
            className="w-full h-64 object-cover" 
          />
          <div className="p-4">
            <div className="flex text-yellow-400 mb-2">★★★★★</div>
            <p className="font-semibold text-lg mb-2">Pastel Long Sleeve</p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-black">$140</p>
              <p className="line-through text-gray-500">$100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BestSellerSection;
