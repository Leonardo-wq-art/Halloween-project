
import Image from "next/image";



const Footer_Conter = () => {
  return (
    <>

    <div className='flex lg:flex-row flex-col items-center
     justify-between px-5 py-20'>
      <div className='w-[64px] h-[124px]'>            
        <Image src="/footer1-img.png" alt="Ghost"
         className=' pular w-full h-full'
          width="64" height="124" /></div>

      <div className='flex flex-col lg:items-start items-center justify-center my-10'>
    
        <div className='flex flex-row '   >
        <div className="w-[32px] h-[33px] ">
            <Image src="/logo.png" alt="skull-logo"  width="32" height="33"  
       className="w-[32px] h-[33px] "/>
        </div>
        <h1 className='text-white mx-3 lg:text-left text-center'>Halloween</h1>
        </div>
      
        <p className='text-gray-200 max-w-[180px] lg:text-left text-center'>Enjoy the scariest night
of your life.</p>

      </div>
      <ul className='flex flex-col lg:items-start items-center justify-center'>
<li className='text-white font-bold text-xl'>About</li>
<li className="text-gray-100 ">About Us</li>
<li className="text-gray-100 ">Features</li>
<li className="text-gray-100 ">News</li>



</ul>


 
<ul className='flex flex-col lg:items-start items-center justify-center'>
<li className='text-white font-bold text-xl'>Our Services</li>
<li className="text-gray-100 ">Pricing</li>
<li className="text-gray-100 ">Discounts
</li>
<li className="text-gray-100 ">Shipping mode</li>



</ul>


<ul className='flex flex-col lg:items-start items-center justify-center'>
<li className='text-white font-bold text-xl'>Our Company</li>
<li className="text-gray-100 ">Blog</li>
<li className="text-gray-100 ">
About us</li>
<li className="text-gray-100 ">
Our Mision</li>



</ul>
<div className='w-[64px] h-[85px]'>            
        <Image src="/footer2-img.png" alt="Ghost-two"
         className=' pular w-full h-full'
         width="64" height="124"
       /></div>
     </div>
     </>
  )
}

export default Footer_Conter