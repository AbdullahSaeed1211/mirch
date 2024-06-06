import Image from "next/image";
import contacthero from "@/public/contact/contacthero.svg";
import Questions from "@/components/contact/Questions";

export default function Page() {
  return (
    <>
      <div className="lg:h-fit bg-contactbg bg-cover bg-no-repeat">
        <div className="flex items-center justify-center gap-x-10">
          <h1 className="font-open_sans font-extrabold text-white text-[27px]  leading-normal lg:text-[60px] lg:[80px]">
            Contact Us
          </h1>

          <Image
            src={contacthero}
            alt=""
            className="h-[190px] w-[200px] lg:h-[680px] lg:w-[640px]"
          />
        </div>
      </div>
      <Questions />
    </>
  );
}
