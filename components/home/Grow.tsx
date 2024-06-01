import email from "@/public/email.svg";
import Image from "next/image";
import aboutimage from "@/public/about-img.svg";
import grow from "@/public/grow.svg";
export default function Grow() {
  return (
    <div className="flex flex-col lg:flex-row mt-10 items-center justify-between text-justify">
      <div className="lg:w-1/2" >
        <p className="text-[#F96261] text-[18px] leading-5 lg:leading-[26px] lg:text-[22px] font-poppins font-semibold">
          Grow with Mirch Media
        </p>
        <h1 className="text-black font-bold text-[32px] leading-10 lg:text-[40px] lg:leading-[48px]">
          Innovate Your Digital Future Today
        </h1>
        <p className="text-[#4F4F4F] font-poppins font-[400px] lg:text-[16px] lg:leading-[24px] text-sm">
        Welcome to the forefront of digital transformation, where we turn visionary ideas into reality. Our services extend beyond mere solutions; they are a blend of creativity, technology, and strategic foresight. With our expert digital marketing solutions, we offer cutting-edge strategies tailored to elevate your brand{`'`}s presence in an ever-evolving digital landscape.

        </p>
        
      </div>
      <Image src={grow} alt="grow image" />
    </div>
  );
}
