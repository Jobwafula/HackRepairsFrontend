import React from 'react';

const offers = [
  { id: 1, title: '20% off on all screen repairs', description: 'Valid until the end of the month.' },
  // Add more offers as needed
];

const SpecialOffers = () => {
  return (
    <div className='m-8'>
      <h2 className='text-3xl font-bold  mb-8'>Special Offers</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {offers.map(offer => (
          <div key={offer.id} className='border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-2xl font-semibold mb-2 text-indigo-600'>{offer.title}</h3>
            <p className='text-gray-700'>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
