import list1 from "@/public/services/worklist1.svg";
import list2 from "@/public/services/worklist2.svg";
import list3 from "@/public/services/worklist3.svg";
import list4 from "@/public/services/worklist4.svg";
import list5 from "@/public/services/worklist5.svg";
import list3v2 from "@/public/services/worklist3v2.svg";
import Image from "next/image";

export default function WorkflowList() {
  const list = [
    {
      title: "Consultation",
      description:
        "Schedule a consultation to discuss your business goals and digital marketing needs with our team.",
      icon: list1,
    },
    {
      title: "Strategy Development",
      description:
        "Our team will develop a customized digital marketing strategy tailored to your business.",
      icon: list2,
    },
    {
      title: "Implementation",
      description:
        "We will put the strategy into action and launch your digital marketing campaigns.",
      icon: list3,
    },
    {
      title: "",
      description: "",
      icon: "",
    },
    {
      title: "Monitoring & Optimization",
      description:
        "We continually monitor and optimize your campaigns to maximize results and ROI.",
      icon: list4,
    },
    {
      title: "Reporting & Analysis",
      description:
        "We provide regular reports and analysis on campaign performance.",
      icon: list5,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 lg:gap-x-2 ">
      <div className="flex flex-col">
        <div className="flex gap-x-4 items-start">
          <Image src={list[0].icon} alt="" className="" />
          <div>
            <h3 className="text-[#f96261] text-[16px] leading-5">
              {list[0].title}
            </h3>
            <p className="text-[#3B3E41] text-[14px] leading-6">
              {list[0].description}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 items-start">
          <Image src={list[1].icon} alt="" className="" />
          <div>
            <h3 className="text-[#f96261] text-[16px] leading-5">
              {list[1].title}
            </h3>
            <p className="text-[#3B3E41] text-[14px] leading-6">
              {list[1].description}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 items-start">
          <div className="lg:hidden">
            <Image src={list3v2} alt="" />
          </div>
          <div className="hidden lg:block">
            <Image src={list[2].icon} alt="" />
          </div>
          <div>
            <h3 className="text-[#f96261] text-[16px] leading-5">
              {list[2].title}
            </h3>
            <p className="text-[#3B3E41] text-[14px] leading-6">
              {list[2].description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <div className="hidden lg:flex gap-x-4 items-start">
          <Image src={list[3].icon} alt="" />
          <div>
            <h3 className="text-[#f96261] text-[16px] leading-5">
              {list[3].title}
            </h3>
            <p className="text-[#3B3E41] text-[14px] leading-6">
              {list[3].description}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 items-start">
          <Image src={list[4].icon} alt="" className="" />
          <div>
            <h3 className="text-[#f96261] text-[16px] leading-5">
              {list[4].title}
            </h3>
            <p className="text-[#3B3E41] text-[14px] leading-6">
              {list[4].description}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 items-start">
          <Image src={list[5].icon} alt="" className="" />
          <div>
            <h3 className="text-[#f96261] text-[16px] leading-5">
              {list[5].title}
            </h3>
            <p className="text-[#3B3E41] text-[14px] leading-6">
              {list[5].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
