
import Link from "next/link"
import Image from "next/image";

import Icons from "./Icons";
const Navbar = () => {
 
  return (

    <nav className='h-full w-full p-5 bg-gradient 
    flex flex-row justify-between items-center md:px-20 px-5
     '>
  <div className="flex flex-row items-center justify-center ">
    <div className="w-[32px] h-[33px] ">
      
  <Image src="/logo.png" alt="skull-logo" width="32" height="33"
   className="w-[32px] h-[33px] "/>
    </div>
<h1 className="text-white  mx-3">
Halloween </h1>
  </div>
  <ul className="md:flex hidden text-slate-700  
   flex-row items-center justify-center gap-10">

    <li className=" underline-animation text-white">
        <Link href="#Home">Home</Link>
    </li>
    <li className="underline-animation text-white">
      <Link href="#About">About</Link>
    </li>

    <li className="underline-animation text-white">
      <Link href="#Candy">Candy</Link>
    </li>
    <li className="underline-animation text-white">
      <Link href="#New">New</Link>
    </li>
   
  </ul>
   <button className="px-3 py-3 rounded-3xl border-white border  md:block hidden
   v4"> <p className=" text-white font-bold">Support</p></button>
<Icons/>

    
  </nav>

  );
};


export default Navbar