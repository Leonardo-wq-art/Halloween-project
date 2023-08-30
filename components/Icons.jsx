"use client"
import Image from 'next/image'
import { useState } from 'react'
import icon_close from "@/public/icon-close.svg"
import icon_hamburger from "@/public/icon-hamburger.svg"
import Link from 'next/link'
const Icons = () => {
    const [toggle, setToggle] = useState(false)

  return (
       
    <div className='md:hidden flex'>
    <Image src={toggle ? icon_close : icon_hamburger } alt="menu"
     onClick={()=>setToggle((prev)=>!prev)} width={24 } height={18} className="w-auto h-auto" />
   <div className={`${toggle ? 'block' : 'hidden' }`}>
   <div className="">

    </div>
    <div className={`${toggle ? "navbarActive":"navbar"} container-color 
     group `}>
    <ul className=' flex flex-col uppercase text-xl gap-10 items-start 
    justify-center'>
      <div className='flex flex-row justify-between w-full'>
      <h1 className="font-bold font-mono text-3xl text-white">Halloween</h1>
<div className="cursor-pointer"   onClick={()=>setToggle((prev)=>!prev)}>
<Image src={icon_close} alt="icon-close"/>

</div>
      </div>
 



     <li className=" text-white font-bold ">
    <Link href="#Home"  
     onClick={()=>setToggle((prev)=>!prev)}>Home</Link>
  </li>
  <li className=" text-white font-bold">
    <Link href="#About"  
      onClick={()=>setToggle((prev)=>!prev)}>About</Link>
  </li>
  <li className=" text-white font-bold">
    <Link href="#Candy" 
       onClick={()=>setToggle((prev)=>!prev)}>Candy</Link>
  </li>
  <li className=" text-white font-bold">
    <Link href="#New" 
      onClick={()=>setToggle((prev)=>!prev)}>New</Link>
  </li>
  </ul>
   </div>
     </div> 
</div>
  )
}

export default Icons