import analysis from "@/public/marketing-strategy/analysis.svg";
import { Check } from "lucide-react";
import Image from "next/image";

const textItems = [
  "Cost of supplies and equipment point",
  "Change the volume of expected of contact",
  "Bibend auctor nisi elit volume are so beguiled",
  "Bibend auctor nisi elit volume are so beguiled",
  "Change the volume of expected of contact",
  "Cost of supplies and equipment",
];

export default function Analysis() {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex flex-col md:w-1/2">
          <h1 className="font-be_vietnam_pro font-bold text-[32px] leading-10 text-black ">
            Analysis
          </h1>
          <p className="font-be_vietnam_pro font-normal text-[16px] leading-7 text-[#555555] mt-5">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and mortar functional solutions.
          </p>
          <ul className="mt-5 text-[#00092C]">
            <li className="font-semibold font-be_vietnam_pro text-[16px] leading-7">
              - Efficiently unleash cross-media information
            </li>
            <li className="font-semibold font-be_vietnam_pro text-[16px] leading-7">
              - Quickly maximize timely deliverables
            </li>
            <li className="font-semibold font-be_vietnam_pro text-[16px] leading-7">
              - Dramatically maintain clicks-and-mortar solutions
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex items-end justify-end my-5">
          <Image src={analysis} alt="analysis" />
        </div>
      </div>
      <div className="md:mt-10 mt-5">
        <div className="grid md:grid-cols-2 md:grid-rows-3 gap-y-6 md:gap-y-4 justify-center items-center ">
          {textItems.map((item, index) => (
            <div className="inline-flex" key={index}>
              <Check color="#FE7146" />
              <p className="font-be_vietnam_pro font-semibold text-[16px] leading-7 text-[#00092C] ml-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
