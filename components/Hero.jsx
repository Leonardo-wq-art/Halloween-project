import React from 'react'
import home1 from  "@/public/home1-img.png"
import Image from 'next/image'
const Hero = () => {
  return (
    <section id="Home" className='w-full h-full '>

    <div  className='flex  md:flex-row-reverse flex-col-reverse items-center justify-center '>
        <div className='flex md:items-start w-full py-5 px-5  lg:px-5 p-0  justify-center flex-col '>
            <h1 className='font-bold
             text-white text-xl
              max-w-sm'>#1 TOP SCARIEST GHOST</h1>
              <h1 className='font-bold
             text-white lg:text-7xl text-4xl
              max-w-sm uppercase '>Uooo Trick or Tread!!</h1>
              <p className=' text-white  
              md:max-w-sm max-w-lg my-3'>Hi, I'm Reiza,
              people call me "El Labu". I am currently trying to learn 
 something new, building my own bike with parts made only in Malaysia.</p>
                <div className=' flex md:flex-row flex-col
             
                   md:items-center items-center justify-between'>
                <button className="px-4 py-4 rounded-2xl
                 bg-orange-700  md:mx-5 mx-0 my-5 
   v4"> <p className=" text-white font-bold">Book Now</p>

   </button>
   <p className=' hover:text-orange-700 text-white
    transition-colors md:mx-5 mx-2 cursor-pointer '>Track Record</p>

      
   </div>
        </div>
    
        <div className='flex
          relative flex-col w-full  h-full
          md:items-end items-center justify-end '>
            <div className=' w-[256px]  h-[279px]'>
<Image src={home1} alt='Pumpkin'
 width={256} height={279} priority={true}
 className=' w-[256px] h-[279px]'  />
</div>
<div className="flex flex-col items-center justify-center">
  <div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-[1px] h-10 bg-white"></div>
</div>
<div className=' flex flex-col items-center justify-center'>
  <span className="text-white font-bold">The labu "Reiza"</span>
  <span className="text-gray-200 mt-[-5px]">The living pumpkin"</span>
</div>
</div>
</div>
    

 </section>
  )
}

export default Hero