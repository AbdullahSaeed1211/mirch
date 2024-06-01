import { Progress } from "@/components/ui/progress";

export default function Expertise() {
  return (
    <div className="flex flex-col lg:p-20 p-[20px] mt-10">

    <div className="flex flex-col lg:flex-row lg:items-center justify-between text-justify ">
      <div className="lg:w-1/2">
        <p className="text-[#F96261] leading-[26px] text-[22px] font-poppins font-semibold">
          Expertise Speaks
        </p>
        <h1 className="text-black font-bold text-[40px] leading-[48px]">
          Our Expertise
        </h1>
      </div>
      <p className="text-[#4F4F4F] font-poppins font-[400px] text-[16px] leading-[24px]">
          We distinguish ourselves with unmatched expertise and commitment in
          each project we embark upon.
        </p>
    </div>
    <div className="flex flex-col gap-4 mt-10">
        <h1 className="text-black font-bold text-[28px] leading-[38px]">
          97% - Web Development
        </h1>
        <Progress value={97} />
        <h1 className="text-black font-bold text-[28px] leading-[38px]">
          89% - UI/UX
        </h1>
        <Progress value={89} />
        <h1 className="text-black font-bold text-[28px] leading-[38px]">
          95% - Digital Marketing
        </h1>
        <Progress value={95} />
      </div>
    </div>
  );
}
