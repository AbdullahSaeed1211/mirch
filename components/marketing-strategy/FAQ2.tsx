"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "@/public/home/plus.svg";
import Image from "next/image";
import { PlusIcon } from "lucide-react";

const items = [
  {
    question: "What does your digital strategy service include?",
    answer:
      "Our digital strategy service involves comprehensive market analysis, defining clear goals, and crafting bespoke digital solutions to enhance your online visibility and return on investment.",
  },
  {
    question: "How does your web development process work?",
    answer:
      "Our digital strategy service involves comprehensive market analysis, defining clear goals, and crafting bespoke digital solutions to enhance your online visibility and return on investment.",
  },
  {
    question: "Can you create a unique logo and graphics for my brand?",
    answer:
      "Our digital strategy service involves comprehensive market analysis, defining clear goals, and crafting bespoke digital solutions to enhance your online visibility and return on investment.",
  },
  {
    question: "What makes your web design different from others?",
    answer:
      "Our digital strategy service involves comprehensive market analysis, defining clear goals, and crafting bespoke digital solutions to enhance your online visibility and return on investment.",
  },
];

export default function FAQ2() {
  return (
   
      <div className="flex flex-col justify-start items-start mt-5 lg:mt-10 w-full">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4">
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="py-3 rounded-[8px]">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center ">
                    <PlusIcon className="mr-2"/>
                    <p className="text-left font-medium text-[black] lg:text-[18px] font-be_vietnam_pro">
                      {item.question}
                    </p>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#555555] font-be_vietnam_pro">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
  );
}
