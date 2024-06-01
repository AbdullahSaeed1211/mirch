import Image from "next/image";
import canon from "@/public/home/canon.png";
import unilever from "@/public/home/unilever.png";
import coca from "@/public/home/coca.png";
import lenovo from "@/public/home/lenovo.png";
import microsoft from "@/public/home/microsoft.png";
import amazon from "@/public/home/amazon.png";
const companies = [
  {
    name: "Canon",
    image: canon,
  },
  {
    name: "Unilever",
    image: unilever,
  },
  {
    name: "Coca Cola",
    image: coca,
  },
  {
    name: "Lenovo",
    image: lenovo,
  },
  {
    name: "Microsoft",
    image: microsoft,
  },
  {
    name: "Amazon",
    image: amazon,
  },
];
export default function Trusted() {
  return (
    <div className="flex flex-col md:my-20 my-10">
      <div className="items-center text-[#1E254C] align-items-center text-center justify-center mb-10">
        <h1 className="font-abhaya font-bold tracking-tighter lg:text-[120px] lg:leading-[110px] text-[44px] leading-[42px]">
          Trusted by great <br />{" "}
          <span className="font-inter font-[700px] italic lg:text-[120px] lg:leading-[110px] tracking-normal">
            companies
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-6 grid-rows-1 gap-x-3 md:mt-20">
        {companies.map((company) => (
          <div key={company.name} className="flex justify-center items-center">
            <Image src={company.image} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
