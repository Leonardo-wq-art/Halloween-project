import About from "@/components/About";
import Arrivals from "@/components/Arrivals";
import Discount from "@/components/Discount";
import Footer_Conter from "@/components/Footer_Conter";
import Hero from "@/components/Hero";
import NewLetter from "@/components/NewLetter";
import Section from "@/components/Section";
import Trick from "@/components/Trick";

export default function Home() {
  return (
    <div className="bg-gradient ">

<Hero/>
<Section/>
<About/>
<Trick/>
<Discount/>
<Arrivals/>
<NewLetter/>
<Footer_Conter/>
   </div>
  )
}
