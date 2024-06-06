import Image from "next/image";
import separator from "@/public/contact/separator.svg";
import { Button } from "../ui/button";
export default function Questions() {
  return <div className="flex flex-col items-center justify-center mt-5 md:mt-10">
    <h1 className="font-open_sans font-extrabold text-[#006299] text-[18px] leading-6 lg:text-[46px] lg:leading-[63px]">HAVE ANY QUESTIONS? JUST SAY HI!</h1>
    <Image src={separator} alt="separator" className="h-3 w-[300px]"/>
    <Button variant={"outline"} color="#006299" className="text-[#006299] text-[16px] leading-5 mt-2 md:mt-5">
        Get in Touch
    </Button>
  </div>;
}
