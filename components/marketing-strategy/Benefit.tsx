import { Check } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
const textItems = [
  "Objectively innovate empowered manufactured",
  "Holisticly predominate extensible",
  "Procedures for reliable supply chains",
  "Dramatically engage top-line web services",
  `“Outside the box" thinking`,
];
export default function Benefit() {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between gap-x-4 mt-10">
        <div className="lg:w-2/5 h-full w-full">
          <Card className="bg-[#303360] rounded-xl px-4 py-6 h-full flex lg:justify-start items-center">
            <CardContent>
              <div className="flex flex-col gap-y-4 ">
                <p className="font-be_vietnam_pro font-bold text-[20px] leading-8 text-white">
                  Have you any <br /> question or query
                </p>

                <h3 className=" text-start font-be_vietnam_pro text-[24px] leading-8 text-white font-bold">
                  GET FREE{" "}
                  <span className="text-[#FE7146]">
                    CONSULTATION <br />
                  </span>
                  WITH OUR AGENT
                </h3>

                <div className="w-fit px-4 justify-start rounded-full text-white bg-mirch-pink p-1">
                  <Link href="">Contact Us</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-3/5">
          <div className="flex flex-col">
            <h1 className="font-be_vietnam_pro font-bold text-[32px] leading-10 text-black mt-5 lg:mt-0">
              Benefit
            </h1>
            <p className="font-be_vietnam_pro font-normal text-[16px] leading-7 text-[#555555] mt-5">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and mortar functional solutions.
            </p>
            <div className="grid gap-y-6 md:gap-y-4 justify-start items-center lg:justify-start mt-5 lg:mt-10">
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
        </div>
      </div>
    </>
  );
}
