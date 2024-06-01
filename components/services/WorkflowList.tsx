import list1 from "@/public/services/worklist1.svg";
import list2 from "@/public/services/worklist2.svg";
import list3 from "@/public/services/worklist3.svg";
import list4 from "@/public/services/worklist4.svg";
import list5 from "@/public/services/worklist5.svg";
import list3v2 from "@/public/services/worklist3v2.svg";
import Image from "next/image";
import gadgets from "@/public/services/GADGETs.png"

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
    <div className="grid lg:grid-cols-2 lg:gap-x-2 mt-5 lg:-mt-20">
      <div className="flex flex-col">
        {list.slice(0, 3).map((item, index) => (
          <div key={index} className="flex gap-x-4 items-start mb-4">
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={50} // Set a fixed width
              height={50} // Set a fixed height
              className="object-contain"
            />
            <div>
              <h3 className="text-mirch-pink text-[16px] leading-5">
                {item.title}
              </h3>
              <p className="text-[#3B3E41] text-[14px] leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>
      <div className="flex flex-col justify-end">
        {list.slice(4, 6).map((item, index) => (
          <div key={index} className="flex gap-x-4 items-start mb-4">
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={50} // Set a fixed width
              height={50} // Set a fixed height
              className="object-contain"
            />
            <div>
              <h3 className="text-mirch-pink text-[16px] leading-5">
                {item.title}
              </h3>
              <p className="text-[#3B3E41] text-[14px] leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Image src={gadgets} alt='gadgets'  className="lg:hidden"/>
    </div>
  );
}
