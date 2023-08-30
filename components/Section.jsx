import React from 'react'
import Image from 'next/image'
import CategoryOne from "@/public//category1-img.png"
import CategoryTwo from "@/public//category2-img.png"
import CategoryThree from "@/public//category3-img.png"

const Section = () => {
  return (
   
    <div className='flex flex-col items-center justify-center py-20'>
        <div className='flex items-center justify-center '>
            <h1 className='text-white font-bold text-3xl max-w-xs text-center'>Favorite Scare
Category</h1>

        </div>
        <div className='grid lg:grid-cols-3 
md:grid-cols-2 grid-cols-1 items-center justify-center '>
    <div className=' flex flex-col items-center justify-center mx-10 my-5 '>
    <div className=' w-[256px]   h-[256px]'>
        <Image src={CategoryOne}  alt='Pumpkins' 
width={120} height={120}  className=' w-[256px]   h-[256px] transform hover:-translate-y-2 translate-y-0 aa text-red-300 block'/>
</div>
<h1 className='text-white font-bold text-center'>Pumpkins
</h1>
<p className='text-white max-w-[200px] 
text-center'>You look at the scariest pumpkins there is.</p>
    </div>
    <div className=' flex flex-col items-center justify-center mx-10 my-5 '>
    <div className=' w-[256px]   h-[256px]'>
        <Image src={CategoryTwo}  alt='Witch Hat' 
width={120} height={120}  className=' w-[256px]   h-[256px] transform hover:-translate-y-2 translate-y-0 aa text-red-300 block'/>
</div>

<h1 className='text-white font-bold text-center'>Witch Hat
</h1>
<p className='text-white max-w-[200px] 
text-center'>Pick the most stylish witch hats out there.</p>
    </div>
    <div className=' flex flex-col items-center justify-center mx-10 my-5 aa'>
    <div className=' w-[256px]   h-[256px]'>
        <Image src={CategoryThree}  alt='Ghosts' 
width={120} height={120}  className=' w-[256px] 
  h-[256px] transform hover:-translate-y-2 translate-y-0 aa
   text-red-300 block'/>
</div>
<h1 className='text-white font-bold text-center'>Ghosts
</h1>
<p className='text-white max-w-[200px] 
text-center'>Choose the ghosts, the 
scariest there are.</p>
    </div>
</div>
    </div>
    
  )
}

export default Section