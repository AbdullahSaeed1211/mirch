import Link from "next/link";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import mirchLogo from "@/public/mirchLogo.svg";
import pinkUp from "@/public/pinkUp.svg";
import Image from "next/image";

const Company = [
  { name: "About Us", link: "/" },
  { name: "Our Services", link: "/" },
  { name: "Our Projects", link: "/" },
  { name: "Blog & Updates", link: "/" },
];

const Links = [
  { name: "FAQ", link: "/" },
  { name: "Testimonials", link: "/" },
  { name: "Recent Work", link: "/" },
  { name: "Features", link: "/" },
];

const Contact = [
  { icon: Phone, text: "+123 456 7890", link: "/" },
  { icon: Mail, text: "info@mirchmedia.com", link: "/" },
  {
    icon: MapPin,
    text: "123 Main St, Suite 100, Anytown",
    link: "/",
  },
];

export default function Footer() {
  return (
    <>
      <div className="relative w-full min-h-screen mx-auto px-4 md:px-20 pb-10 lg:pb-20 text-[#FDFCFC] bg-footerCurved bg-cover bg-no-repeat lg:bg-center flex items-center justify-center">

        <div className="grid lg:grid-cols-4 items-center gap-y-1 lg:pt-20 text-center">
          <div className="hidden lg:block h-full-500 mb-20 -mt-20">
            <Image src={mirchLogo} alt="Logo" className="h-[100px] w-[384px] mb-20 -mt-10" /> 
          </div>
          <div className="item">
            <h1 className="font-bold font-montserrat text-[32px] leading-[42px] mb-4 ">
              Company
            </h1>
            {Company.map((item, index) => (
              <div key={index} className="mb-2">
                <Link
                  href={item.link}
                  className="font-lato font-normal text-[18px] leading-[26px] ">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h1 className="font-bold font-montserrat text-[32px] leading-[42px] mb-4 ">
              Links
            </h1>
            {Links.map((item, index) => (
              <div key={index} className="mb-2">
                <Link
                  href={item.link}
                  className="font-lato font-normal text-[18px] lg:text-[] leading-[26px] lg:leading-[]">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="h-full">
            <h1 className="font-bold font-montserrat text-[32px] leading-[42px] mb-4">
              Contact
            </h1>
            {Contact.map((item, index) => (
              <div key={index} className="flex items-center justify-center mb-2">
                <item.icon className="mr-1" />
                <Link
                  href={item.link}
                  className="font-lato font-normal text-[18px] lg:text-[] leading-[26px] lg:leading-[]">
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
          <p className="absolute bottom-0 left-0 right-0 text-center pb-2 mb-2 lg:mb-2">Copyright © 2024 Mirch Media. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
