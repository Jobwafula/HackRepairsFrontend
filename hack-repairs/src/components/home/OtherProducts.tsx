import ServicesCard from "../ServicesCard"
interface OtherProducts {
    title:string,
    img:string,
    link:string
}

const otherProducts:OtherProducts []= [
    {
        title:'sim trays',
        img:'',
        link:''
    },
    {
        title:'sim batteries',
         img:'',
        link:''
    },
    {
        title:'phone covers',
         img:'',
        link:''
    }
] as const
const OtherProducts = () =>{
    return(
    <div className="mx-8">
        <h1 className='text-2xl font-bold'>Other Products</h1>
        <div className="flex flex-col md:flex-row lg:flex-row md:gap-4">
        {otherProducts.map((item,index)=>{
            return(
                <div key={index}><ServicesCard  title="" img='' link='' /></div>
            )
        })}
        </div>
    </div>)
}

export default OtherProducts