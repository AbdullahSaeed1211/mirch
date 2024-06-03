import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/public/content-marketing/project1.png";
import project2 from "@/public/content-marketing/project2.png";
import project3 from "@/public/content-marketing/project3.png";
import Image from "next/image";

const cardsData = [
  {
    image: project1,
    title: 'Lead Gen Campaign',
    client: 'Client',
    company: 'Adore Company'
  },
  {
    image: project2,
    title: 'New Product Launch',
    client: 'Client',
    company: 'Dewy Glow Inc.'
  },
  {
    image: project3,
    title: 'Leadership Ad Campaign',
    client: 'Client',
    company: 'Wins Industries'
  },
];

export default function Projects() {
  return (
    <div className="mt-10 items-center justify-between text-justify lg:p-20 p-[20px] ">
      <div className="flex flex-row justify-between items-center text-mirch-pink font-montserrat mb-10">
        <h1 className="text-start md:text-[64px] md:leading-[74px] font-extrabold">
          Projects
        </h1>
        <p className="underline decoration-mirch-pink decoration-2 text-[20px] leading-[32px]">
          See all projects
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 w-full items-center lg:justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} className="w-full lg:max-w-md lg:w-auto rounded-xl shadow-lg mb-4">
            {card.image && (
              <Image src={card.image} alt={card.title} className="w-full h-64 object-cover rounded-t-xl mb-4" />
            )}
            <CardContent>
              <h3 className="font-montserrat font-bold text-[20px] mb-2 text-mirch-pink">{card.title}</h3>
              <div className="inline-flex justify-between items-center gap-x-2">
                <p className="text-gray-600">{card.client}</p>
                <span className="text-gray-400">|</span>
                <p className="text-[#757575] font-bold font-montserrat">{card.company}</p>
              </div>         
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
