import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import case1 from "@/public/case1.png";
import case2 from "@/public/case2.png";
import case3 from "@/public/case3.png";
export default function Blogs() {
  return (
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="my-10">
        <p className="text-[#F96261] leading-[26px] text-[22px] font-poppins font-semibold">
          Blogs
        </p>
        <div className="flex flex-col lg:flex-row">
          <h1 className="text-black font-bold font- text-[40px] leading-[48px] w-full">
            Industry <br />
            Updates & Blogs
          </h1>
          <p className="text-[#4F4F4F] font-poppins font-[400px] text-[16px] leading-[24px] align-top text-justify hidden md:block">
            Dive into the latest trends, insights, and innovations shaping the
            digital landscape. Our blog keeps you informed and ahead in your
            industry
          </p>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-5 justify-between mt-10 items-center">
          <div className="grid grid-rows-2 grid-cols-1 gap-y-5 h-full justify-between row-span-2 ">
            <Card className="flex flex-row gap-y-2">
              <Image src={case1} alt="Product" className="aspect-[1.6] " />
              <div className="flex flex-col w-full">
                <CardContent className="px-4 pt-4 w-full">
                  <span className="text-[#6941C6] font-inter font-semibold leading5 text-[14px]">
                    November 16, 2014
                  </span>
                  <h1 className="text-inter font-semibold text-[16px] leading-7 text-[#101828]">
                    Blog
                  </h1>
                  <p className="font-inter text-[#667085] font-normal text-base leading-6">
                    We believe in pushing the boundaries of what{`' `}s
                    possible, and our innovative solutions reflect this belief.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <div className=" bg-[#C11574] bg-opacity-15 py-1 px-2 rounded-xl">
                      <p className="text-[#C11574] text-[14px] leading-[20px] font-inter text-center">
                        Research
                      </p>
                    </div>
                    <div className=" bg-[#027A48] bg-opacity-15 py-1 px-2 rounded-xl">
                      <p className="text-[#027A48] text-[14px] leading-[20px] font-inter text-center ">
                        UI UX
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </div>
            </Card>
            <Card className="flex flex-row gap-y-2">
              <Image src={case2} alt="Product" className="aspect-[1.6] " />
              <div className="flex flex-col w-full">
                <CardContent className="px-4 pt-4 w-full">
                  <span className="text-[#6941C6] font-inter font-semibold leading5 text-[14px]">
                    November 16, 2014
                  </span>
                  <h1 className="text-inter font-semibold text-[16px] leading-7 text-[#101828]">
                    Blog 2
                  </h1>
                  <p className="font-inter text-[#667085] font-normal text-base leading-6">
                    We believe in pushing the boundaries of what{`' `}s
                    possible, and our innovative solutions reflect this belief.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <div className=" bg-[#C11574] bg-opacity-15 py-1 px-2 rounded-xl">
                      <p className="text-[#C11574] text-[14px] leading-[20px] font-inter text-center">
                        Research
                      </p>
                    </div>
                    <div className=" bg-[#027A48] bg-opacity-15 py-1 px-2 rounded-xl">
                      <p className="text-[#027A48] text-[14px] leading-[20px] font-inter text-center ">
                        UI UX
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </div>
            </Card>
          </div>
          <div className="row-span-2 col-span-1">
            <Card className="flex flex-col ">
              <Image
                src={case3}
                alt="Product"
                className="aspect-[1.6] w-full"
              />
              <CardContent className="px-4 pt-4 w-full">
                  <span className="text-[#6941C6] font-inter font-semibold leading5 text-[14px]">
                    November 16, 2014
                  </span>
                  <h1 className="text-inter font-semibold text-[16px] leading-7 text-[#101828]">
                    Blog 3
                  </h1>
                  <p className="font-inter text-[#667085] font-normal text-base leading-6">
                    We believe in pushing the boundaries of what{`' `}s
                    possible, and our innovative solutions reflect this belief.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <div className=" bg-[#C11574] bg-opacity-15 py-1 px-2 rounded-xl">
                      <p className="text-[#C11574] text-[14px] leading-[20px] font-inter text-center">
                        Research
                      </p>
                    </div>
                    <div className=" bg-[#027A48] bg-opacity-15 py-1 px-2 rounded-xl">
                      <p className="text-[#027A48] text-[14px] leading-[20px] font-inter text-center ">
                        UI UX
                      </p>
                    </div>
                  </div>
                </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
