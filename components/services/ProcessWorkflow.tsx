import gadgets from "@/public/services/gadgets.png";
import Image from "next/image";
export default function ProcessWorkflow() {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-[#f96261] text-[16px] leading-5">How it works</h3>
          <h1 className="text-[64px] font-extrabold leading-[74px] font-montserrat text-[#483D89]">
            Our Process Workflow
          </h1>
        </div>
        <Image src={gadgets} alt="" className="overflow-hidden" />
      </div>
      <div className="grid lg:grid-cols-2 ">

      </div>
    </div>
  );
}
