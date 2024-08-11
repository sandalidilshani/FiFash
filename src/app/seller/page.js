import AddProduct from '@/components/seller/AddProduct';
import Header from '@/components/seller/Header';
import Home from '@/components/seller/Home';
import Image from 'next/image';
import Link from 'next/link';

const SellerDashboard = () => {
  return (
    <>
      <Header/>

      <main>
        <Home/>
        

        {/* View Orders */}
        <section id="view-orders" className="py-20 px-8 lg:px-32">
          <h2 className="text-3xl font-bold mb-6">View Orders</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Order ID</th>
                <th className="border px-4 py-2">Customer Name</th>
                <th className="border px-4 py-2">Product</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Total Price</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat this block for each order */}
              <tr>
                <td className="border px-4 py-2">#1234</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">Product Name</td>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">$280</td>
                <td className="border px-4 py-2">Shipped</td>
              </tr>
              {/* End of order block */}
            </tbody>
          </table>
        </section>

        {/* Settings */}
        <section id="settings" className="py-20 px-8 lg:px-32">
          <h2 className="text-3xl font-bold mb-6">Settings</h2>
          <p>Settings page content goes here.</p>
        </section>
      </main>

      <footer className="bg-brown text-white w-full">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex justify-center space-x-6 mb-6">
            <Link href="#">HOME</Link>
            <Link href="#">ABOUT</Link>
            <Link href="#">CONTACT</Link>
          </nav>
          <div className="text-center text-sm">
            © 2024 Your Company. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default SellerDashboard;
