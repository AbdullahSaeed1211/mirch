import Image from "next/image";
import image1 from "@/public/image1.png";
import image2 from "@/public/image2.png";
import image3 from "@/public/image3.png";
import image4 from "@/public/image4.png";
export default function Services() {
  return (
    <div className="mt-10">
      <p className="text-[#F96261] lg:leading-[26px] lg:text-[22px] font-poppins font-semibold">
        Services
      </p>
      <div className="flex flex-col lg:flex-row">
        <h1 className="text-black font-bold font- lg:text-[40px] lg:leading-[48px] w-full">
          Our Services
        </h1>
        <p className="text-[#4F4F4F] font-poppins font-[400px] text-[16px] leading-[24px] align-top text-justify">
          As a first-rate digital agency{`,`} we deliver top-tier digital
          services with a commitment to quality, innovation, and customer
          satisfaction across various technology domains.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-x-2 mt-5 ">
        <div className="col-span-1">
          <Image src={image1} alt="" height={406} />
        </div>
        <div className="col-span-2 h-[406px] ">
          <Image src={image2} alt="" height={406} className="" />
        </div>
        <div className="col-span-1">
          <Image src={image3} alt="" height={406} />
        </div>
        <div className="col-span-1">
          <Image src={image4} alt="" height={406} />
        </div>
      </div>
    </div>
  );
}
