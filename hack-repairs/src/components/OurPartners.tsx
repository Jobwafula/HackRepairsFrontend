import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OurPartners() {
  return (
    <div className='mb-8 mt-8 ml-8'>
        <h1 className='text-2xl font-bold mb-6'>Our Partners</h1>
        <div >
          <div className='flex items-center gap-2 mb-6 '><Image src='/mutable.jpeg' className='rounded-full' objectFit='cover' width={50}
            height={50} alt='mutable tech'/>
            <p className='text-blue-500 text-2xl font-bold '>Mutable Tech Entreprises</p></div>  
            <Link href='https://mutabletech.co.ke/' className='hover:text-blue-500 hover:underline'>Click To View  Software Solution available</Link>
        </div>
    </div>
  )
}
