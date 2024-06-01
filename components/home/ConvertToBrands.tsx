import Image from "next/image";
import convert from "@/public/converttobrands.svg";
export default function ConvertToBrands() {
  return (
    <div className="flex  flex-col lg:flex-row-reverse mt-10 items-center justify-between text-justify">
      <div className="lg:w-1/2" >
        <p className="text-[#F96261] lg:leading-[26px] lg:text-[22px] font-poppins font-semibold text-[16px] leading-[18px]">
        We Convert Business into Brands
        </p>
        <h1 className="text-black font-bold lg:text-[40px] lg:leading-[48px] text-[26px] leading-[32px] text-start md:text-justify my-2">
        Designing Digital Masterpieces to Propel Your Business
        </h1>
        <p className="text-[#4F4F4F] font-poppins font-[400px] md:text-[16px] md:leading-[24px] text-justify text-[11px] leading-4">
        At Mirch Media, we don{`'`}t just build websites; we sculpt digital masterpieces that serve as the cornerstone of your business{`'`}s online presence. <br />Our approach combines creativity with strategy, ensuring that every website we create is not only visually captivating but also an efficient business-generating tool. By understanding your unique brand and audience, we tailor a digital experience that resonates with your customers and distinguishes your business in a crowded digital space.

        </p>
        
      </div>
      <Image src={convert} alt="convert to brands image" />
    </div>
  );
}
