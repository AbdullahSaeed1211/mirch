import Image from "next/image";
import vector1 from "@/public/home/circleOrange1.svg";
import vector2 from "@/public/home/circleOrange2.svg";
import vector3 from "@/public/home/circleOrange3.svg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import heroStar from "@/public/home/starHero.svg";

export default function Hero() {
  return (
    <>
      <div className=" min-h-full w-full bg-[#002374] lg:min-h-10 mx-auto px-4 md:px-20 pb-10 lg:pb-20 text-white lg:bg-herobg lg:bg-cover lg:bg-right lg:bg-no-repeat">
        <div className="flex flex-col align-items-center">
          <div className="flex flex-row gap-x-2 items-center">
            <h1 className="font-abhaya font-extrabold text-[54px] leading-[81px] lg:text-[128px] lg:leading-[192px]">
              We Are
            </h1>

            <Image
              src={vector1}
              alt="vector1"
              className="h-5 w-5 lg:h-[88px] lg:w-[54px]"
            />
          </div>

          <div className="flex flex-row gap-x-2 items-center">
            <Image
              src={vector2}
              alt="vector2
            "
            className="h-5 w-5 lg:h-[88px] lg:w-[54px]"
            />

            <h1 className="font-playfair font-normal text-[42px] leading-[81px] lg:text-[96px] lg:leading-[192px] italic">
              The Best Listing
            </h1>
          </div>

          <div className="flex flex-row gap-x-2 items-center">
            <h1 className="font-abhaya font-extrabold text-[54px] leading-[81px] lg:text-[128px] lg:leading-[192px]">
              In The Wol
            </h1>
            <Image src={vector3} alt="vector3" className="h-5 w-5" />
          </div>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <div className="bg-white w-[60px] lg:w-[130px] h-[1px]" />
          <div className="font-abhaya font-medium text-[10px] lg:text-[28px]">
            Just drop your product by email, <br />
            we will work it in our studio.
          </div>

          <div>
            <Button className="bg-[#F14E23] rounded-full flex gap-x-1 font-bold">
              Start Here
              <ArrowUpRight className="bg-black/15 rounded-full h-4 w-4 " />
            </Button>
          </div>

          <div className="items-center px-3">
            <Image src={heroStar} alt="hero Star" className="h-54 w-54" />
          </div>
        </div>
      </div>
    </>
  );
}
