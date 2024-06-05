import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <div className="min-w-full h-full w-full rounded-xl text-center sm:my-15 bg-nextproject bg-cover  bg-no-repeat mt-10">
      <p className="text-white pt-6 text-[8px] leading-3 md:pt-12 md:text-[16px] md:leading-7">
        WE OFFER THE BEST SOLUTIONS
      </p>
      <h1 className="text-white w-full font-poppins text-sm font-bold lg:text-5xl lg:leading-tight mt-4">
        Let us be a part of <br className="" />
        your next project
      </h1>
      <div className="flex flex-col w-full items-center lg:flex-row justify-evenly  gap-x-10 py-4 md:mt-4">
        <div className=" rounded p-1 bg-[#303360] text-[8px] leading-[12px] sm:text[16px] sm:leading-6 text-white flex items-center justify-center  transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#303360] ">
          Contact us
          <ArrowUpRight className="h-2 w-2 md:h-5 md:w-5 ml-1" />
        </div>
      </div>
    </div>
  );
}
