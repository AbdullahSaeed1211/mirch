import gadgets from "@/public/services/GADGETs.png";
import Image from "next/image";
export default function ProcessWorkflow() {
  return (
    <div className="mt-5 lg:mt-10">
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <h3 className="text-mirch-pink text-[16px] leading-5">
            How it works
          </h3>
          <h1 className=" text-[46px] lg:text-[64px] font-extrabold leading-[56px] lg:leading-[74px] font-montserrat text-[#483D89]">
            Our Process Workflow
          </h1>
        </div>
        <Image
          src={gadgets}
          alt=""
          className="overflow-hidden hidden lg:block"
        />
      </div>
    </div>
  );
}
