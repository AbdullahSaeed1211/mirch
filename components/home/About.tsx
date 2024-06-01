import email from "@/public/email.svg";
import Image from "next/image";
import aboutimage from "@/public/about-img.svg";
export default function About() {
  return (
    <>
      <div className="lg:grid gap-y-2 lg:grid-cols-3 w-full">
        <div className="lg:col-span-2">
          <p className="text-[#F96261] leading-[26px] text-[22px] font-poppins font-semibold"> 
            Mirch Media
          </p>
          <h1 className="text-black font-bold text-[29px] leading-[35px] lg:text-[40px] lg:leading-[48px]">
            Empowering Your Brand{`'`}s Journey in the Digital World
          </h1>
          <p className="text-[#4F4F4F] font-poppins text-[11px] font-[400px] lg:text-[16px] leading-[24px] text-justify">
            Transform and elevate your brand with our two decades of digital
            mastery. Experience innovative, results-driven strategies that
            enhance your online presence and connect with your audience like
            never before.
          </p>
          <div className="grid lg:grid-cols-2 gap-y-2 lg:justify-between lg:items-start mt-2 items-center justify-center ">
            <div className="flex items-center gap-x-5">
              <Image src={email} alt="email logo" />
              <p className="font-lusitana font-normal text-[21px] leading-[32px] text-[#04111D]">
                Innovative Design Solutions
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <Image src={email} alt="email logo" />
              <p className="font-lusitana font-normal text-[21px] leading-[32px] text-[#04111D]">
                Strategic Branding Insights
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <Image src={email} alt="email logo" />
              <p className="font-lusitana font-normal text-[21px] leading-[32px] text-[#04111D]">
                Advanced SEO Techniques
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <Image src={email} alt="email logo" />
              <p className="font-lusitana font-normal text-[21px] leading-[32px] text-[#04111D]">
                Cutting-Edge Web Development
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <Image src={email} alt="email logo" />
              <p className="font-lusitana font-normal text-[21px] leading-[32px] text-[#04111D]">
                Social Media Mastery
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <Image src={email} alt="email logo" />
              <p className="font-lusitana font-normal text-[21px] leading-[32px] text-[#04111D]">
                Data-Driven Analytics
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <Image src={aboutimage} alt="about image" className="sm:hidden lg:block"/>
      </div>
    </>
  );
}
