import consultation from "@/public/content-marketing/consultation.svg";
import creation from "@/public/content-marketing/creation.svg";
import implementation from "@/public/content-marketing/implementation.svg";
import optimization from "@/public/content-marketing/optimization.svg";
import Image from "next/image";
const list = [
  {
    icon: consultation,
    title: "Consulation",
    desc: "Schedule a consultation to discuss your business goals and digital marketing needs with our team.",
  },
  {
    icon: creation,
    title: "Creation",
    desc: "Our team will develop a customized digital marketing strategy tailored to your business.",
  },
  {
    icon: implementation,
    title: "Implementation",
    desc: "We will put the strategy into action and launch your digital marketing campaigns to reach our goals.",
  },
  {
    icon: optimization,
    title: "Optimization",
    desc: "Developing a content marketing strategy that aligns with your business target audience.",
  },
];

export default function HowitWorks() {
  return (
    <div className="bg-[#002463] md:bg-transparent md:bg-howitworks relative w-full min-h-screen mx-auto px-4 md:px-20 pb-10 lg:pb-20 text-[#FDFCFC] bg-cover bg-no-repeat lg:bg-center flex flex-col items-center justify-evenly py-20">
      <div className="mb-5 flex flex-col">
        <p className="text-[16px] md:text-[20px] md:leading-[32px] font-bold font-montserrat text-center ">
          PROCESS
        </p>
        <h1 className="font-extrabold text-[24px] font-montserrat md:text-[64px] md:leading-[74px] text-mirch-pink text-center">
          How it Works
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 justify-end items-center pb-10 md:pb-5">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start h-full ">
            <Image src={item.icon} alt={item.title} className="mb-5" />
            <h3 className="font-bold font-montserrat text-[24px] leading-[32px] text-center">
              {item.title}
            </h3>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
