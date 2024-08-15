'use client'
import { useRouter } from 'next/navigation';

// service props types
interface serviceprops {
    
    title:string,
    img:string,
    link:string
}

export default function ServicesCard({title,img,link}:serviceprops) {
    const router = useRouter()
    // handle card click
    const handleClick = ()=>{
        router.push(`${link}`)
    }
  return (
    <div className="w-full md:w-[30%] transition-transform duration-500 ease-in-out hover:scale-105  hover:bg-button hover:text-white hover:cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md" onClick={handleClick}>
      <img className="w-full h-48 object-cover rounded-t-lg" src={img} alt={title} />
      <div className="p-4  hover:text-white">
        <h2 className="text-lg  hover:text-white  font-bold">{title}</h2>
      </div>
    </div>
  )
}
