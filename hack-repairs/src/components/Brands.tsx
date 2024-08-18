
import Image from 'next/image'
const Brands = () =>{

    const brands = [
        {
            name:'Tecno',
            image:'/brands/tecnologo.png'
        },
        {
            name:'Samsung',
            image:'/brands/samsung.png'
        },
        {
            name:'Itel',
            image:'/brands/itel.png'
        },
        {
            name:'Huawei',
            image:'/brands/huawei.png'
        },
        {
            name:'Nokia',
            image:'/brands/nokia.png'
        },
        {
            name:'Realme',
            image:'/brands/realme.png'
        }
    ]
    return(
        <div className=' bg-white'>
        <h1 className='text-2xl mx-8 font-bold'>Brands We Work With</h1>
        <div className='mx-8 mb-8 my-8  flex gap-4 mt-8'>
            {brands.map((brand,index)=>{

                return(<div key={index}>
                    <Image width={100} height={100}src={brand.image} alt={brand.name} />
                </div>)
            })}
        </div>
        </div>
        
    )
}
export default Brands;