import React from 'react'

const NewLetter = () => {
  return (
    <div className='flex flex-col py-20
     items-center justify-center'>
        <h1 className='text-white font-bold text-3xl'>Our Newsletter</h1>
      
        <p className='text-gray-200 max-w-sm 
        text-center'>Promotion new products and
         sales. Directly to your inbox</p>

         <form className='flex flex-row items-center justify-center'>
    <input type="text" placeholder='Enter Your Mail' className='sm:w-[400px] w-72
     outline-white border border-white h-12  py-10 px-3  rounded-2xl my-10 text-white bg-transparent' />
        <button className=" rounded-2xl h-10 w-32 ml-[-150px]
                 bg-orange-700 v4 
   v3"> <p className="text-white font-bold">Contact me</p>

   </button> 
   </form>

     </div>
  )
}

export default NewLetter