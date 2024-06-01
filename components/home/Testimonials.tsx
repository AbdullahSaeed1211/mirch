import Image from "next/image";
import grow from "@/public/home/grow.svg";
import stars from "@/public/home/Stars.svg";
export default function Testimonial() {
  return (
    <div className="mt-10 items-center justify-between text-justify px-[20px] lg:container lg:px-20 mx-auto">
      <div>
        <p className="text-mirch-pink leading-[26px] text-[22px] font-poppins font-semibold">
          testtimonials
        </p>
        <h1 className="text-black font-bold text-[40px] leading-[48px]">
          Client Testimonials{" "}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-start gap-x-10">
        <Image src={grow} alt="grow image" />
        <div className="flex flex-col gap-y-3 justify-center items-start text-start lg:w-1/2">
          <Image src={stars} alt="stars" />
          <p className="font-inter font-medium text-[22px] leading-[35px] text-[#525252]">
            We stand out from the crowd, offering unparalleled expertise and
            dedication to every project we undertake. Here{`' `}s why you should
            choose us as your trusted digital partner:
          </p>

          <p className="font-Roboto font-bold text-[16px] leading-[24px] text-[#02061A]">
            Nafija Sen
          </p>
          <p className="font-Roboto font-normal text-[16px] leading-6">
            Director at John Garage
          </p>
        </div>
      </div>
    </div>
  );
}
