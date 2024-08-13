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
    <div className="w-full md:w-[30%]  hover:text-white hover:cusor-pointer bg-white border border-gray-200 rounded-lg shadow-md" onClick={handleClick}>
      <img className="w-full h-48 object-cover rounded-t-lg" src={img} alt={title} />
      <div className="p-4">
        <h2 className="text-lg  hover:bg-button font-semibold text-gray-800">{title}</h2>
      </div>
    </div>
  )
}
