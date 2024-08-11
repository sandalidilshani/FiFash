// components/Footer.js
import Image from 'next/image';

const Footer = () => (
  <footer className="bg-brown text-white w-full">
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="grid grid-cols-5 gap-2">
          <Image src="/footer1.jpeg" alt="Fashion model 1" width={200} height={200} className="w-full h-48 object-cover" />
          <Image src="/footer2.jpeg" alt="Fashion model 2" width={200} height={200} className="w-full h-48 object-cover" />
          <Image src="/footer3.jpeg" alt="Fashion model 3" width={200} height={200} className="w-full h-48 object-cover" />
          <Image src="/footer4.jpeg" alt="Fashion model 4" width={200} height={200} className="w-full h-48 object-cover" />
          <Image src="/footer5.jpeg" alt="Fashion model 5" width={200} height={200} className="w-full h-48 object-cover" />
        </div>
        <div className="text-center mt-4">
          <span className="bg-white text-brown px-4 py-2 rounded-full text-sm">Follow Our Instagram : @Fifash_Trends</span>
        </div>
      </div>
      <nav className="flex justify-center space-x-6 mb-6">
        <a href="#" className="hover:underline">MEN</a>
        <a href="#" className="hover:underline">WOMAN</a>
        <a href="#" className="hover:underline">KIDS</a>
        <a href="#" className="hover:underline">TRENDS</a>
        <a href="#" className="hover:underline">CONTACT US</a>
        <a href="#" className="hover:underline">FAQ</a>
      </nav>
      <div className="text-center text-sm">© 2021 FIFAH. All Rights Reserved</div>
    </div>
  </footer>
);

export default Footer;
