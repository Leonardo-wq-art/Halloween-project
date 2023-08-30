import React from 'react'
import Image from 'next/image'
import newOne from "@/public/new1-img.png"
import newTwo from "@/public/new2-img.png"
import newThree from "@/public/new3-img.png"

const Arrivals = () => {
  return (
    <section  id='New' className='flex flex-col'> 
    <h1 className='text-white font-bold text-center text-3xl'>New Arrivals
</h1>
    <div className='flex md:flex-row flex-col
     items-center justify-center px-10 py-10'>
        <div className='container-color mx-5 my-5 w-[310px] h-[307px]
        rounded-2xl flex flex-col group
         items-center justify-center '>
            <div className='flex items-start justify-start w-full'>           
                
                 <div className="flex items-start justify-center
                  bg-orange-700 rounded-md p-1 m-10 text-white">New</div>
                  </div>
                  <div className=" w-[128px] h-[128px]">
                 <Image src={newOne} 
    alt='Haunted House' width={128} heigh={128} className=' w-[128px] h-[128px]
     transform group-hover:-translate-y-2 translate-y-0 aa text-red-300 block'/>
                 </div>
  <h1 className='text-white font-bold text-center'>Haunted House

</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Accessory
</p>
<p className='text-white max-w-[200px] mb-5 
text-center'>
$20.99 <span className='text-orange-500 line-through text-xs'>$29.99 </span></p>
        </div>
        <div className='container-color rounded-2xl w-[310px] h-[307px]
         flex flex-col items-center group justify-center mx-5 my-5 '>
     <div className='flex items-start justify-start w-full'>           
                
                <div className="flex items-start justify-center
                 bg-orange-700  rounded-md p-1 m-10 text-white">New</div>
                 </div>
                 <div className=" w-[128px] h-[128px]">
                 <Image src={newTwo} 
    alt='Halloween Candle' width={128} heigh={128} className=' w-[128px] h-[128px]
     transform group-hover:-translate-y-2 translate-y-0 aa text-red-300 block'/>
                 </div>
          
          <h1 className='text-white font-bold text-center'>Halloween Candle

</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Accessory
</p>
<p className='text-white max-w-[200px] mb-5 
text-center'>
$9.99 <span className='text-orange-500 line-through text-xs'>$19.99 </span></p>
        </div>
        <div className='container-color rounded-2xl flex flex-col w-[310px] h-[307px]
         items-center justify-center group mx-5 my-5 aa' >
             <div className='flex items-start justify-start w-full'>           
                
                <div className="flex items-start justify-center
                 bg-orange-700 rounded-md p-1 m-10 text-white">New</div>
                 </div>
                 <div className=" w-[128px] h-[128px]">
                 <Image src={newThree} 
    alt='Witch Hat' width={128} heigh={128} className=' w-[128px] h-[128px]
     transform group-hover:-translate-y-2 translate-y-0 aa text-red-300 block'/>
                 </div>
   
 <h1 className='text-white font-bold text-center'>Witch Hat

</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Accessory
</p>
<p className='text-white max-w-[200px] mb-5 
text-center'>
$19.99 <span className='text-orange-500 line-through text-xs'>$39.99 </span></p>
        </div>
    </div>
    </section>
  )
}

export default Arrivals