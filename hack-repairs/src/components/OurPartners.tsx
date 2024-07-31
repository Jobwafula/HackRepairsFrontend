import React from 'react'
import Image from 'next/image'

export default function OurPartners() {
  return (
    <div className='mb-8 mt-8 ml-8'>
        <h1 className='text-2xl font-bold mb-6'>Our Partners</h1>
        <div >
          <div className='flex items-center gap-2 mb-6 '><Image src='/mutable.jpeg' width={100}
            height={100} alt='mutable tech'/>
            <p className='text-blue-500 text-2xl '>Mutable Tech Entreprises</p></div>  
            <a href='https://mutabletech.co.ke/' className='hover:text-blue-500 hover:underline'>Click To View  Software Solution available</a>
        </div>
    </div>
  )
}
