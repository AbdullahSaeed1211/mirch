"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "@/public/home/plus.svg";
import faqImage from "@/public/home/faqImage.svg";
import Image from "next/image";

const items = [
  {
    question: "Q: What does your digital strategy service include?",
    answer:
      "Our digital strategy service involves comprehensive market analysis, defining clear goals, and crafting bespoke digital solutions to enhance your online visibility and return on investment.",
  },
  {
    question: "Q: How does your web development process work?",
    answer:
      "Our digital strategy service involves comprehensive market analysis, defining clear goals, and crafting bespoke digital solutions to enhance your online visibility and return on investment.",
  },
  {
    question: "Q: Can you create a unique logo and graphics for my brand?",
    answer:
      "Our digital strategy service involves comprehensive market analysis, defining clear goals, and crafting bespoke digital solutions to enhance your online visibility and return on investment.",
  },
  {
    question: "Q: What makes your web design different from others?",
    answer:
      "Our digital strategy service involves comprehensive market analysis, defining clear goals, and crafting bespoke digital solutions to enhance your online visibility and return on investment.",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col w-full px-[20px] lg:container lg:px-20 mx-auto lg:flex-row lg:gap-x-6 mt-10">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <p className="text-mirch-pink leading-[26px] text-[22px] font-poppins font-semibold">
          Process
        </p>
        <h1 className="text-black font-bold text-[40px] leading-[48px]">
          Frequently Asked Questions
        </h1>
        <Image src={faqImage} alt="FAQ" className="my-2"/>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4">
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#242424] p-[16px] rounded-[8px]">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[white] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#CFCFCF]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
