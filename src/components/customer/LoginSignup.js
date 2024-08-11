import React from 'react';

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-8 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-brown-bg">FIFASH</h2>
          <p className="text-sm mt-2">Want 15% off your first purchase? Log in or sign up to unlock!</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 pr-2">
            <h3 className="text-xl font-bold mb-2 text-brown-bg">Log in</h3>
            <input type="text" placeholder="Phone number or email" className="w-full p-2 mb-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" />
            <button className="bg-brown text-white w-full py-2 rounded">Log in</button>
          </div>
          <div className="w-1/2 pl-2">
            <h3 className="text-xl font-bold mb-2 text-brown">Sign up</h3>
            <input type="text" placeholder="First name" className="w-full p-2 mb-2 border rounded" />
            <input type="text" placeholder="Last name" className="w-full p-2 mb-2 border rounded" />
            <input type="email" placeholder="Email address" className="w-full p-2 mb-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" />
            <button className="bg-brown text-white w-full py-2 rounded">Continue</button>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>or continue with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Facebook</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Google</button>
            <button className="bg-black text-white px-4 py-2 rounded">Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
}
