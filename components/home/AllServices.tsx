import Image from "next/image";
import star from "@/public/home/star.svg"
export default function AllServices() {
  return (
    <div className="flex flex-row-reverse lg:flex-row my-20 px-[20px] lg:container lg:px-20 mx-auto ">
        <div className="gap-y-2 w-1/5 items-center py-20 ">
            <Image src={star} alt='' className="h-[91px] w-[91px]"/>
        </div>
      <div className=" flex-1 items-center text-[#1E254C] align-items-center text-center justify-center mb-10 w-full">
        <h1 className="font-abhaya font-bold tracking-tighter lg:text-[120px] text-start lg:leading-[120px] text-[46px] leading-[46px]">
          We provide all <br />{" "}
          <span className="font-playfair font-normal  italic lg:text-[120px] lg:leading-[120px] tracking-normal">
            Services
          </span> to help you eCom brand
        </h1>
      </div>
     
    </div>
  );
}
