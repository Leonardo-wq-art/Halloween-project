
import Image from 'next/image'


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
        <Image src="/category1-img.png"  alt='Pumpkins' 
width="256" height="256"  className=' w-[256px]   h-[256px] transform hover:-translate-y-2 translate-y-0 aa text-red-300 block'/>
</div>
<h1 className='text-white font-bold text-center'>Pumpkins
</h1>
<p className='text-white max-w-[200px] 
text-center'>You look at the scariest pumpkins there is.</p>
    </div>
    <div className=' flex flex-col items-center justify-center mx-10 my-5 '>
    <div className=' w-[256px]   h-[256px]'>
        <Image src="/category2-img.png"   alt='Witch Hat' 
width="256" height="256" className=' w-[256px]   h-[256px] transform hover:-translate-y-2 translate-y-0 aa text-red-300 block'/>
</div>

<h1 className='text-white font-bold text-center'>Witch Hat
</h1>
<p className='text-white max-w-[200px] 
text-center'>Pick the most stylish witch hats out there.</p>
    </div>
    <div className=' flex flex-col items-center justify-center mx-10 my-5 aa'>
    <div className=' w-[256px]   h-[256px]'>
        <Image src="/category3-img.png"  alt='Ghosts' 
width="256" height="256"  className=' w-[256px] 
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