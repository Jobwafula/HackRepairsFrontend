"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { 
    FormLabel, 
} from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

interface CartItem {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    title: "Tecno Screen",
    img: "/screens/tecno/tecnos.jpeg",
    price: 1800,
    quantity: 1,
  },
  {
    id: 2,
    title: "Samsung Screen",
    img: "/screens/samsung/samsung.jpg",
    price: 2300,
    quantity: 2,
  },
];

const Checkout = () => {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    }
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  const [cartItems] = useState<CartItem[]>(initialCartItems);

  const handleCheckout = (data: any) => {
    console.log("Checkout data:", data);
    // Handle form submission logic here
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
    <Navbar />
    <FormProvider {...methods}>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
            <form onSubmit={handleSubmit(handleCheckout)}>
              <div className="mb-4">
                <FormLabel htmlFor="name">Name</FormLabel>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="John Doe"
                  className="w-full p-2 border"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <FormLabel htmlFor="email">Email</FormLabel>
                <input
                  id="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })}
                  placeholder="john.doe@example.com"
                  className="w-full p-2 border"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <input
                  id="phone"
                  {...register("phone", { required: "Phone number is required" })}
                  placeholder="+254 712 345 678"
                  className="w-full p-2 border"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
              <div className="mb-4">
                <FormLabel htmlFor="address">Address</FormLabel>
                <input
                  id="address"
                  {...register("address", { required: "Address is required" })}
                  placeholder="123 Main Street, Nairobi"
                  className="w-full p-2 border"
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
              </div>
              <Button type="submit" className="w-full bg-button text-white rounded-lg hover:bg-green-700">
                Place Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                    <Image
                    width={100}
                    height={100}
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">Ksh {item.price}</p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">Ksh {item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Total:</h3>
                  <p className="text-2xl font-bold">Ksh {getTotalPrice()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </FormProvider>
    <Footer />
    </>
  );
};

export default Checkout;
