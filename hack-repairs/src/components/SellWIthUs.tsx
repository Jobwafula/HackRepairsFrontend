'use client'; // Ensure this component is rendered on the client side

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SellWithUs = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [businessName, setBusinessName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [businessLocation, setBusinessLocation] = useState<string>('');
  const [products, setProducts] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      businessName,
      phoneNumber,
      email,
      businessLocation,
      products,
    }
    // handle form submission logic
    console.log("form data", formData);
    router.push('/thankyou');
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white p-8 rounded-lg ">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-600">Sell with Us</h1>
        <p className="mb-6 text-gray-700 text-center">
          We make selling products online easy through an easy-to-use platform and hands-on support. If you are interested in working with us, please fill out the form below and we will be in touch. Currently, all sellers on Hack Repairs must be based in Kilifi.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
            <input
              id="businessName"
              type="text"
              placeholder="Your Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="businessLocation" className="block text-sm font-medium text-gray-700">Business Location</label>
            <input
              id="businessLocation"
              type="text"
              placeholder="Enter your business' location"
              value={businessLocation}
              onChange={(e) => setBusinessLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
            <p className="text-sm text-gray-500 mt-1">*Currently all sellers on Hack-Repairs must be based in Kilifi.</p>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="products" className="block text-sm font-medium text-gray-700">Products you will be selling</label>
            <select
              id="products"
              value={products}
              onChange={(e) => setProducts(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            >
              <option value="">Samsung</option>
              <option>Tecno</option>
              <option>Nokia</option>
              <option>Infinix</option>
              
            </select>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-button  text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellWithUs;
