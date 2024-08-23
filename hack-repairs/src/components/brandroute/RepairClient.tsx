'use client';

import { useState } from 'react';
import { SiTicktick } from 'react-icons/si';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';

interface RepairClientProps {
  newPrice: number;
}

const RepairClient = ({ newPrice }: RepairClientProps) => {
  const [quantity, setQuantity] = useState(1);

  // Handlers for increment and decrement
  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className="mb-4 flex items-center space-x-4">
        <button onClick={handleDecrement} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">-</button>
        <span className="text-xl">{quantity}</span>
        <button onClick={handleIncrement} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">+</button>
      </div>
      <div className="mb-4">
        <p className="text-xl font-semibold">Total Price: Ksh {newPrice * quantity}</p>
      </div>
      <Dialog>
        <DialogTrigger>
          <button className="mt-4 px-6 py-3 bg-button text-white rounded-lg hover:bg-green-700">Book Now</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-button text-3xl"><SiTicktick /></DialogTitle>
            <h1>Service added to cart successfully</h1>
            <DialogDescription>
              Do you want to continue browsing for more screen repair services or go to cart?
            </DialogDescription>
          </DialogHeader>
          <div className='flex justify-between capitalize'>
            <button className="bg-button hover:bg-green-800 text-white p-2 rounded"><Link href='/cart'>View Cart and checkout</Link></button>
            <button className="border border-button p-2 rounded"><Link href='/services/screen-replacement'>Continue browsing</Link></button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RepairClient;
