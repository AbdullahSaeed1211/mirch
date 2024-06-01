import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import case1 from "@/public/home/case1.png";
import case2 from "@/public/home/case2.png";
import case3 from "@/public/home/case3.png";
const cardsData = [
  {
    id: 1,
    image: case1,
    title: "Case Study-1",
    description:
      "We believe in pushing the boundaries of what's possible, and our innovative solutions reflect this belief.",
    linkText: "See Full Project",
  },
  {
    id: 2,
    image: case2,
    title: "Case Study-2",
    description:
      "We believe in pushing the boundaries of what's possible, and our innovative solutions reflect this belief.",
    linkText: "See Full Project",
  },
  {
    id: 3,
    image: case3,
    title: "Case Study-3",
    description:
      "We believe in pushing the boundaries of what's possible, and our innovative solutions reflect this belief.",
    linkText: "See Full Project",
  },
];
export default function CaseStudies() {
  return (
    <div className="mt-10 items-center justify-between text-justify lg:p-20 p-[20px]">
      <div className="flex flex-col">
        <div className="lg:w-1/2 w-full">
          <p className="text-mirch-pink lg:leading-[26px] lg:text-[22px] font-poppins font-semibold">
            Our Works
          </p>
          <h1 className="text-black font-bold lg:text-[40px] lg:leading-[48px]">
            Case Studies
          </h1>
          <p className="text-[#4F4F4F] font-poppins font-[400px] text-[16px] leading-[24px]">
            Here are some detailed narratives showcasing our solutions{`' `}{" "}
            transformative impact on client businesses.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card) => (
            <Card key={card.id} className="flex flex-col gap-y-2 rounded-lg">
              <Image
                src={card.image}
                alt="Product"
                className="aspect-[1.6] h-full w-full"
              />
              <CardContent className="px-4 pt-4">
                <h1 className="font-lusitana text-[24px] font-bold leading-[32px]">
                  {card.title}
                </h1>
                <p className="text-[#4F4F4F] font-poppins tracking-normal text-start font-normal text-[16px] leading-6">
                  {card.description}
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-mirch-pink text-[14px] leading-[24px]">
                  {card.linkText}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
