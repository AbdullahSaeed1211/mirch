import Image from "next/image";
import serviceshero from "@/public/services/serviceshero.png";
import ServicesCard from "@/components/services/ServicesCard";
import ProcessWorkflow from "@/components/services/ProcessWorkflow";
import WorkflowList from "@/components/services/WorkflowList";
import Footer from "@/components/Footer";
export default function ServicePage() {
  return (
    <>
      <div className="px-[20px] lg:container lg:px-20 mx-auto mt-10">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-mirch-pink text-[16px] leading-5">
              Home {` > `} Services
            </h3>
            <h1 className="lg:text-[64px] font-extrabold text-[46px] leading-[74px] font-montserrat text-[#483D89]">
              Our Services
            </h1>
          </div>
          <Image src={serviceshero} alt="" className="overflow-hidden hidden md:block"  />
        </div>
        <ServicesCard />
        <ProcessWorkflow />
        <WorkflowList />
      </div>
        <Footer/>
    </>
  );
}
