import Image from "next/image";
import map from "@/public/home/Map.png";

export default function GetInTouch() {
  return (
    <div className="my-10 items-center justify-between text-justify px-[20px] lg:container lg:px-20 mx-auto">
      <div>
        <h1 className="text-black font-lusitana font-bold text-[40px] leading-[48px]">
          Get in touch
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 justify-between w-full mt-5">
        <div className="flex flex-col justify-evenly ">

        
        <div className="flex flex-col ">
          <h1 className="text-[#02061A] font-Roboto font-bold lg:text-[24px] lg:leading-[34px]">
            New York
          </h1>
          <p className="font-normal font-Roboto text-[16px] leading-6 text-[#02061A]">
            Forest Hills, NY, United States, New York
          </p>

          <p className="font-bold font-Roboto text-[16px] leading-6 text-[#02061A]">
            View Map
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#02061A] font-Roboto font-bold lg:text-[24px] lg:leading-[34px]">
            Email
          </h1>
          <p className="font-normal font-Roboto text-[16px] leading-6 text-[#02061A]">
            marketing@mirchmedia.com{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#02061A] font-Roboto font-bold lg:text-[24px] lg:leading-[34px]">
            Phone
          </h1>
          <p className="font-normal font-Roboto text-[16px] leading-6 text-[#02061A]">
            1-888-321-4159{" "}
          </p>
        </div>
        </div>
        <div className="flex justify-center lg:justify-between gap-x-10">
          <Image src={map} alt="mirch map" />
        </div>
      </div>
    </div>
  );
}
