import Image from "next/image";
import contentMarketing from "@/public/content-marketing/contentMarkHero.svg";
import Footer from "@/components/Footer";
import Pricing from "@/components/content-marketing/Pricing";
import GetList from "@/components/content-marketing/GetList";
import HowitWorks from "@/components/content-marketing/HowitWorks";
import Projects from "@/components/content-marketing/Projects";
export default function page() {
return(

    <>
    <div className="px-[20px] lg:container lg:px-20 mx-auto ">
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-mirch-pink text-[12px] lg:text-[16px] leading-5 font-bold font-lato">
          H O M E {` > `} S E R V I C E S {` > `} C O N T E N T  {``}M A R K E
          T I N G{" "}
        </p>
        <h1 className="text-[#483D89] font-extrabold font-montserrat lg:text-[64px] lg:leading-[74px]">
          Content Marketing
        </h1>
        <Image src={contentMarketing} alt="" />
      </div>
      <Pricing />
    <GetList />
    </div>
    <HowitWorks />
    <Projects/>
    <Footer />
  </>
);
}
