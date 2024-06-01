import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <div
      className="w-full rounded-[16px] text-center md:my-[60px] md:px-[324px] md:py-[89px] bg-nextproject bg-contain bg-no-repeat bg-center mt-10
    ">
      <p className="text-white pt-6 text-[8px] leading-3 md:pt-[48px] lg:text-[18px]">
        WE OFFER BEST SOLUTIONS
      </p>
      <h1 className="text-white font-poppins text-[16px] leading-5 font-bold lg:text-[56px] lg:leading-[64px] ">
        Let us be a part of <br className="block lg:hidden" />
        your next project{" "}
      </h1>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        {/* <Button className="bg-[#303360] text-white flex  items-center justify-center font-medium mt-2 rounded-xl py-0 text-[8px]">
          Contact us
          <ArrowUpRight className=" rounded-full h-4 w-4 text-white" />
        </Button> */}
        <Button className="bg-[#303360] text-white flex gap-y-0 lg:gap-x-2 items-center justify-center font-medium mt-2 rounded-xl py-0 text-[8px] md:text-[16px]">
          Contact us
          <ArrowUpRight className=" rounded-full h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
}
