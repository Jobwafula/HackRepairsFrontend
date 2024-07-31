import React from 'react';

const categories = [
  { id: 1, name: 'Tecno', image: '/categories/tecno.png' },
  { id: 2, name: 'Samsung', image: '/categories/tecno.png' },
  { id: 3, name: 'Itel', image: '/categories/tecno.png' },
  { id: 4, name: 'Huawei', image: '/categories/tecno.png' },
  { id: 5, name: 'Apple', image: '/categories/tecno.png' },
  { id: 6, name: 'Nokia', image: '/categories/tecno.png' },
  { id: 7, name: 'Xiaomi', image: '/categories/tecno.png' },
  { id: 8, name: 'Oppo', image: '/categories/tecno.png' },
];

const Categories = () => {
  return (
    <div className='m-8'>
      <h1 className='text-2xl font-bold capitalize'>Shop By Category</h1>
      {/* cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        {categories.map(category => (
          <div key={category.id} className='border relative p-4 rounded-lg shadow-lg'>
            <img src={category.image} alt={category.name} className='w-48 h-48 object-cover mb-4 rounded-md' />
            
            <h2 className=' text-xl font-semibold capitalize'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
