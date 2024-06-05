import Image from "next/image";
import marketingsm from "@/public/marketing-strategy/marketingsm.svg";
import ServicesList from "@/components/marketing-strategy/ServicesList";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
export default function page() {
  return (
    <>
      <div className="h-[300px] hidden md:flex md:bg-marketingbg md:flex-col items-center justify-center">
        <h1 className="font-be_vietnam_pro text-white font-bold lg:text-[48px] lg:leading-[80px] text-center">
          Marketing Strategy
        </h1>
        <p className="text-white text-[16px] leading-7 text-center ">
          Home <span> {`>`}</span> Services <span> {`>`}</span>{" "}
          <span className="text-[#FE7146]">Marketing Stategy</span>
        </p>
      </div>
      <div className="h-[200px] md:hidden bg-[#303360] flex text-white items-center justify-center gap-x-6">
        <div className="font-be_vietnam_pro text-[22px] font-bold ">
          Marketing <br /> Strategy
        </div>
        <div className="w-3/5 ">
          <Image
            src={marketingsm}
            alt="phone hero"
            className="justify-center items-center"
          />
        </div>
      </div>
      <ServicesList />
      <div className="min-w-7xl mx-[20px] lg:container lg:px-20 mt-10 ">
        <CTA />
      </div>
      
      <Footer />
    </>
  );
}
