import React from 'react'
import Image from 'next/image'
import TrickOne from "@/public/trick-treat1-img.png"
import TrickTwo from "@/public/trick-treat2-img.png"
import TrickThree from "@/public/trick-treat3-img.png"
import TrickFour from "@/public/trick-treat4-img.png"
import TrickFive from "@/public/trick-treat5-img.png"
import TrickSix from "@/public/trick-treat6-img.png"
const Trick = () => {
  return (
    <section id="Candy">
    <div className='flex flex-col items-center justify-center py-20'>
    <div className='flex items-center justify-center '>
        <h1 className='text-white font-bold text-3xl 
        max-w-xs text-center'>Trick Or TreatTrick Or Treat</h1>

    </div>
    <div className='grid lg:grid-cols-3 
md:grid-cols-2 grid-cols-1 items-center justify-center '>
<div className=' flex flex-col group items-center justify-center mx-10 my-5 
container-color rounded-2xl py-5 px-10 '>
  <div className='w-[128px] h-[112px]'>
<Image src={TrickOne} alt='Toffee' width={128} heigh={112} className='
text-red-300 block  w-[128px] h-[112px]
 transform group-hover:-translate-y-4 translate-y-0 aa'/>
 </div>
<h1 className='text-white font-bold text-center'>Toffee

</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Candy
</p>
<p className='text-white max-w-[200px] 
text-center'>
$11.99</p>
</div>
<div className=' flex flex-col group items-center justify-center mx-10 my-5
container-color rounded-2xl p-5 '>
  <div className="w-[128px]
  h-[128px]"
>
<Image src={TrickTwo} alt='Bone' width={128} heigh={112} className=' w-[128px]
  h-[128px]

text-red-300 block  transform group-hover:-translate-y-4 translate-y-0 aa'/>
</div>

<h1 className='text-white font-bold text-center'>Bone</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Accessory</p>
<p className='text-white max-w-[200px] 
text-center'>$8.99</p>
</div>
<div className=' flex flex-col group items-center justify-center mx-10 my-5 container-color rounded-2xl p-5 '>
<div className="w-[128px]
  h-[128px]"
>
<Image src={TrickThree} alt='Scarecrow' width={128} heigh={112} className=' w-[128px]
  h-[128px]

text-red-300 block  transform group-hover:-translate-y-4 translate-y-0 aa'/>
</div>
<h1 className='text-white font-bold text-center'>Scarecrow

</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Accessory
</p>
<p className='text-white max-w-[200px] 
text-center'>
$15.99</p>
</div>

<div className=' flex flex-col group items-center justify-center mx-10 my-5 container-color rounded-2xl p-5 '>
<div className="w-[128px]
  h-[128px]"
>
<Image src={TrickFour} alt='Candy Cane' width={128} heigh={112} className=' w-[128px]
  h-[128px]

text-red-300 block  transform group-hover:-translate-y-4 translate-y-0 aa'/>
</div>
<h1 className='text-white font-bold text-center'>Candy Cane

</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Candy


</p>
<p className='text-white max-w-[200px] 
text-center'>
$7.99</p>
</div>
<div className=' flex flex-col group items-center justify-center mx-10 my-5 container-color rounded-2xl p-5 '>
<div className="w-[128px]
  h-[128px]"
>
<Image src={TrickFive} alt='Pumpkin' width={128} heigh={112} className=' w-[128px]
  h-[128px]

text-red-300 block  transform group-hover:-translate-y-4 translate-y-0 aa'/>
</div>
<h1 className='text-white font-bold text-center'>Pumpkin


</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Candy

</p>
<p className='text-white max-w-[200px] 
text-center'>
$19.99</p>
</div>
<div className=' flex flex-col group items-center justify-center mx-10 my-5 container-color rounded-2xl p-5 '>
<div className="w-[128px]
  h-[128px]"
>
<Image src={TrickSix} alt='Ghost' width={128} heigh={112} className=' w-[128px]
  h-[128px]

text-red-300 block  transform group-hover:-translate-y-4 translate-y-0 aa'/>
</div>
<h1 className='text-white font-bold text-center'>Ghost


</h1>
<p className='text-gray-200 text-sm max-w-[200px] 
text-center'>Accessory

</p>
<p className='text-white max-w-[200px] 
text-center'>
$17.99</p>
</div>
</div>
</div>

</section>
  )
}

export default Trick