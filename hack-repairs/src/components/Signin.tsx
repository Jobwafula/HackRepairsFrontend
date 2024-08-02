'use client'; // Ensure this component is rendered on the client side

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'; // Import Google icon

const Signin = () => {
  const { signin, signinWithGoogle } = useAuth(); // Add signinWithGoogle function in the context
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(email, password, () => {
      router.push('/');
    });
  };

  const handleGoogleSignIn = () => {
    signinWithGoogle(() => {
      router.push('/');
    });
  };

  return (
    <div className='bg-black h-screen absolute top-0 left-0 w-full bg-opacity-50 flex justify-center items-center'>
      <div className="bg-white w-[90%] md:w-1/2 shadow-lg rounded-lg mx-auto p-8 max-w-lg"> {/* Increased max-width */}
        <h1 className="text-2xl text-center md:text-2xl font-bold mb-2">Login To Your Account</h1> 
        <p className='text-center'>Welcome ! Please login to continue</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-base md:text-lg font-medium">Email</label> {/* Reduced text size */}
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-base md:text-lg font-medium">Password</label> {/* Reduced text size */}
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full text-base md:text-lg py-2 px-4 bg-button text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full mb-4 flex items-center justify-center text-base md:text-lg py-2 px-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FcGoogle className="text-xl mr-2 " /> Sign in with Google
        </button>
        <p className='text-center'><Link href='' className='text-button underline  mt-4'>Forgot Password</Link></p>
        <p className="mt-4 text-button text-center">
          Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
