import satisfaction from "@/public/satisfaction.svg";
import innovation from "@/public/innovation.svg";
import reliable from "@/public/Reliable.svg";
import Image from "next/image";
export default function Incredible() {
  return (
    <div className="min-h-[720px] w-full mx-auto px-[20px] lg:p-40 p-[20px] text-white lg:mt-10 bg-[#000B47]">
      <div className="flex flex-col lg:flex-row items-top justify-center mb-10 gap-x-4">
        <div>
          <h1 className="font-abhaya font-extrabold text-[60px] leading-[60px] lg:text-[128px] lg:leading-[120px] tracking-tighter">
            How we do our
            <span className="font-playfair font-normal italic lg:text-[120px] lg:leading-[120px] tracking-tight text-[60px] leading-[60px] ">
              {" "}
              incredible
            </span>{" "}
            work
          </h1>
        </div>
        <p className="font-inter w-full font-normal text-[20px] leading-[24px] text-justify pt-10">
          At our digital service firm, we combine innovative technology, deep
          industry expertise, and a commitment to client success. Our
          tailor-made solutions, exceptional service, and 24/7 reliable support
          are designed to meet your unique needs. Choose us for a partnership
          that drives your digital transformation forward
        </p>
      </div>
      <div className="grid  md:grid-cols-3 gap-5 text-center my-20">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <Image src={satisfaction} alt="satisfaction" />
          <h4 className="font-roboto font-medium text-[28px] leading-[42px]">
            18 Years Of Expertise
          </h4>
          <p className="font-inter font-normal text-[16px] leading-[24px]">
            Unparalleled digital assistance with <br /> nearly 2 decades of
            experience
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={innovation} alt="innovative" />
          <h4 className="font-roboto font-medium text-[28px] leading-[42px]">
            Innovative Solutions Delivered
          </h4>
          <p className="font-inter font-normal text-[16px] leading-[24px]">
            We craft cutting-edge solutions <br /> tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={reliable} alt="reliable" />
          <h4 className="font-roboto font-medium text-[28px] leading-[42px]">
            Reliable Support Always
          </h4>
          <p className="font-inter font-normal text-[16px] leading-[24px]">
            Round-the-clock support, ensuring <br /> your peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
}
