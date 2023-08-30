import Image from "next/image"
import DiscountImage from "@/public/discount-img.png"
const Discount = () => {
  return (
    <div className='container-color flex 
     md:flex-row flex-col items-center rounded-3xl justify-center py-10 my-20
      lg:mx-auto mx-5 max-w-[915px] '>
        <div className="	w-[256px] h-[184px]">
        <Image src={DiscountImage} className=" w-[256px] h-[184px]" alt="Bats"
 width={110} height={11}/>
        </div>

<div className="flex flex-col items-center justify-center">
<h1 className=" text-white font-bold text-3xl text-center max-w-xs">50% Discount
On New Products</h1>
<button className="px-4 py-4 rounded-2xl
                 bg-orange-700  md:mx-5 mx-0 my-5 
   v4"> <p className=" text-white font-bold">Book Now</p>

   </button>
</div>
    </div>
  )
}

export default Discount