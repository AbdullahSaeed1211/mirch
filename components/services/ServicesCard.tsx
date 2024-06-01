import Image from "next/image";
import smm from "@/public/services/smm.svg";
import seo from "@/public/services/seo.svg";
import cm from "@/public/services/contentmarketing.svg";
import em from "@/public/services/emailmarketing.svg";
import webd from "@/public/services/webdesign.svg";
import webr from "@/public/services/webreporting.svg";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ServicesCard() {
  const services = [
    {
      id: 1,
      logo: smm,
      title: "Social Media Marketing",
      description:
        "Connect with your customers on social media and build a strong online presence.",
      link: "/services",
      bg: "#d7e0f3",
    },
    {
      id: 2,
      logo: seo,
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website search engine ranking and drive more organic traffic to your site.",
      link: "/services",
      bg: "#002463",
    },
    {
      id: 3,
      logo: cm,
      title: "Content Marketing",
      description:
        "Create valuable digital content that attracts and engages your target audience.",
      link: "/services",
      bg: "#d7e0f3",
    },
    {
      id: 4,
      logo: em,
      title: "Email Marketing",
      description:
        "Reach your customers directly with targeted email campaigns and regular newsletter.",
      link: "/services",
      bg: "#002463",
    },
    {
      id: 5,
      logo: webd,
      title: "Web Design & Optimization",
      description:
        "Create a professional and user-friendly website that helps you stand out from the competition.",
      link: "/services",
      bg: "#d7e0f3",
    },
    {
      id: 6,
      logo: webr,
      title: "Web Analytics & Reporting ",
      description:
        "Help you set up and manage website analytics and provide regular reporting analysis for improvement.",
      link: "/services",
      bg: "#002463",
    },
    {
      id: 7,
      logo: smm,
      title: "Social Media Marketing",
      description:
        "Connect with your customers on social media and build a strong online presence.",
      link: "/services",
      bg: "#d7e0f3",
    },
    {
      id: 8,
      logo: seo,
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website search engine ranking and drive more organic traffic to your site.",
      link: "/services",
      bg: "#002463",
    },
    {
      id: 9,
      logo: cm,
      title: "Content Marketing",
      description:
        "Create valuable digital content that attracts and engages your target audience.",
      link: "/services",
      bg: "#d7e0f3",
    },
  ];
  
  return (
    <div className="w-full grid lg:grid-cols-3 gap-4 justify-between mt-5 md:mt-10">
      {services.map((item) => (
        <div
          key={item.id}
          style={{ backgroundColor: item.bg }}
          className="flex flex-col items-start rounded-xl p-4 justify-evenly gap-y-2">
          <Image src={item.logo} alt={item.title} />
          <h3
            className="font-montserrat font-bold text-[32px] leading-[42px]"
            style={{ color: item.bg === "#002463" ? "#FDFCFC" : "#483D89" }}
          >
            {item.title}
          </h3>
          <p className="text-[#483D89] font-normal text-[18px] leading-[26px]"
            style={{ color: item.bg === "#002463" ? "#FDFCFC" : "#483D89" }}
          
          >
            {item.description}
          </p>
          <Button className="bg-mirch-pink rounded-xl text-white" size="default">
            <Link href={item.link}>Read More</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
