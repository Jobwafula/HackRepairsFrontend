import React from 'react';
import { TiWorld } from "react-icons/ti";
import { MdOutlineWatchLater, MdDashboard, MdSecurity, MdSupportAgent } from "react-icons/md";
import Link from 'next/link';

const SellWithUsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="relative mb-12">
        <img
          src="/images/sell-with-us-hero.jpg"
          alt="Sell with us"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-4xl font-bold text-center">Start Selling with Us</h1>
        </div>
      </section>

      {/* Why Sell With Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Sell With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Large Customer Base */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[5rem] text-button font-semibold mb-2">
              <TiWorld />
            </h3>
            <h3 className="text-xl font-semibold mb-2">Large Customer Base</h3>
            <p>Access millions of potential customers worldwide.</p>
          </div>

          {/* Card 2: Seller Dashboard */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[5rem] text-button font-semibold mb-2">
              <MdDashboard />
            </h3>
            <h3 className="text-xl font-semibold mb-2">Seller Dashboard</h3>
            <p>Manage your listings with ease using our intuitive dashboard.</p>
          </div>

          {/* Card 3: Secure Payments */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[5rem] text-button font-semibold mb-2">
              <MdSecurity />
            </h3>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>Receive payments securely through our trusted platform.</p>
          </div>

          {/* Card 4: 24/7 Support */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[5rem] text-button font-semibold mb-2">
              <MdSupportAgent />
            </h3>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Our support team is available around the clock to assist you.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:mr-6 mb-6 md:mb-0">
            <img src="/images/signup.png" alt="Sign Up" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p>Create your seller account with just a few clicks.</p>
          </div>
          <div className="flex-1 text-center md:mr-6 mb-6 md:mb-0">
            <img src="/images/list-products.png" alt="List Products" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">List Your Products</h3>
            <p>Add your products to our marketplace and reach a global audience.</p>
          </div>
          <div className="flex-1 text-center md:mr-6 mb-6 md:mb-0">
            <img src="/images/manage-orders.png" alt="Manage Orders" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage Orders</h3>
            <p>Keep track of your orders and inventory effortlessly.</p>
          </div>
          <div className="flex-1 text-center">
            <img src="/images/get-paid.png" alt="Get Paid" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
            <p>Receive payments directly to your bank account.</p>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">What Our Sellers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-4">"Selling on this platform has boosted my business. The process is seamless and efficient."</p>
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-sm text-gray-600">Electronics Seller</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-4">"The customer support team is always ready to help. Highly recommend!"</p>
            <h4 className="text-xl font-semibold">Jane Smith</h4>
            <p className="text-sm text-gray-600">Fashion Designer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-4">"I’ve reached more customers than I ever imagined. It’s been a game-changer for my business."</p>
            <h4 className="text-xl font-semibold">Michael Johnson</h4>
            <p className="text-sm text-gray-600">Handmade Crafts</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Selling?</h2>
        <p className="text-lg mb-6">Sign up today and take your business to the next level.</p>
        <button className="bg-button text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg">
          <Link href='/sell-with-us/sell'> Get Started</Link>
        </button>
      </section>
    </div>
  );
};

export default SellWithUsPage;
