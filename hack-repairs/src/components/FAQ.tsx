'use client'
import React, { useState } from 'react';

const faqs = [
  { id: 1, question: 'How long does a screen repair take?', answer: 'Most screen repairs are completed within an hour.' },
  { id: 2, question: 'Do you offer a warranty?', answer: 'Yes, we offer a 6-month warranty on all repairs.' },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [isClicked , setIsClicked] = useState(false)
  return (
    <div className='m-8'>
      <h2 className='text-2xl font-bold' >Frequently Asked Questions</h2>
      <div className='mt-4'>
        {faqs.map(faq => (
          <div key={faq.id} className='border p-4 rounded-lg shadow-lg mb-4'>
            <h3 className='text-xl font-semibold' onClick={()=>setIsClicked(true)}>{faq.question}</h3>
           {isClicked && <p>{faq.answer}</p> }
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
