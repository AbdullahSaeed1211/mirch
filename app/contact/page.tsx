import Image from "next/image";
import contacthero from "@/public/contact/contacthero.svg";
import Questions from "@/components/contact/Questions";
import { ContactForm } from "./ContactForm";
import contactC from "@/public/contact/contactC.svg";
import mapC from "@/public/contact/mapC.png";
import Footer from "@/components/Footer";

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
      <div className="flex gap-x-2 w-full items-center justify-center">
        <div className="lg:w-2/5 hidden lg:block">
          <Image src={contactC} alt="" />
        </div>
        <div className="lg:w-3/5 bg-[#f2f2f1] w-full px-10  mt-5 md:mt-10">
          <ContactForm />
        </div>
      </div>
     < div className="flex items-center justify-center mt-5 md:mt-10">
      <Image src={mapC} alt='' className="h-fit bg-cover bg-norepeat"/>
      </div>
      <Footer />
    </>
  );
}
