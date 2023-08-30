import React from 'react'
import Image from 'next/image'
import about from "@/public/about-img.png"
const About = () => {
  return (
    <section id="About" className='w-full h-full '>

    <div  className='flex  md:flex-row flex-col items-center justify-center '>
        <div className='flex md:items-end items-center w-full py-5 px-10  justify-center flex-col '>
            <h1 className='font-bold
             text-white text-4xl md:text-left text-center
             max-w-sm'>About Halloween
              Night</h1>
        
              <p className=' text-gray-200  
             md:max-w-sm  my-3 md:text-left text-center'>Night of all the saints, or all 
              the dead, is celebrated on October 31 and it is a 
              very fun international celebration, this celebration 
              comes from ancient origins, and is already celebrated by everyone.</p>
                <div className=' flex md:flex-row flex-col
             
             md:items-start my-5 items-center justify-center'>
                <button className="px-4 py-4 rounded-2xl
                 bg-orange-700 
   v4"> <p className=" text-white font-bold">Book Now</p>

   </button>

   </div>
        </div>
    
        <div className='flex flex-col w-full  md:items-start items-center justify-center '>
          <div className='w-[256px]  h-[359px]'>
          <Image src={about} alt='hero-banner' 
          className=' pular  w-full h-full' width={256}
height={359} />
          </div>


</div>
        </div>

    </section>
  )
}

export default About