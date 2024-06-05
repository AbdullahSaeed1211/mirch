import Image from "next/image";
import marketingsm from "@/public/marketing-strategy/marketingsm.svg";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Analysis from "./Analysis";
import Benefit from "@/components/marketing-strategy/Benefit";
import FAQ2 from "./FAQ2";


export default function ServicesList() {
  return (
    <>
      <div className="min-w-7xl mx-[20px] lg:container lg:px-20 mt-10 ">
        <div className="flex">
          <div className="lg:w-4/5 flex flex-col">
            <Image src={marketingsm} alt="" height={640} width={960} className="hidden lg:block"/>
            <div className="flex flex-col">
              <h1 className="font-be_vietnam_pro font-bold text-[32px] leading-10 text-black ">
                Marketing Strategy
              </h1>
              <p className="font-be_vietnam_pro font-normal text-[16px] leading-7 text-[#555555] mt-5">
                Phosfluorescently engage worldwide methodologies with
                web-enabled technology. Interactively coordinate proactive
                e-commerce via process-centric {`"`}outside the box{`"`}{" "}
                thinking. Completely pursue scalable customer service through
                sustainable potentialities. Objectively innovate empowered
                manufactured products whereas parallel platforms. Holisticly
                predominate extensible testing procedures for reliable supply
                chains.
                <br />
                Envisioned multimedia based expertise and cross-media growth
                strategies. Seamlessly visualize quality intellectual capital
                without superior collaboration and idea-sharing. Holistically
                pontificate installed base portals after maintainable products.
              </p>
              <Analysis />
              <Benefit />
              <FAQ2 />

            </div>
          </div>
          <div className="w-1/5 hidden lg:flex lg:flex-col">
            <Card className="bg-[#002463] text-white rounded-xl">
              <CardHeader>
                <CardTitle>Services List</CardTitle>
              </CardHeader>
              <hr color="#ffffff" className="mb-2 mx-4 bg-white" />
              <CardContent>
                <Collapsible className="grid gap-2">
                  <CollapsibleTrigger className="flex w-full items-center text-lg font-normal  text-white [&[data-state=open]>svg]:rotate-90">
                    Marketing Strategy
                    <ChevronRight className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className=" grid gap-6 p-6">
                      <Link
                        className="group grid h-auto w-full justify-start gap-1"
                        href="/services">
                        <div className="text-sm font-medium leading-none group-hover:underline text-white">
                          Services Page
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Explore our other service offerings
                        </div>
                      </Link>
                      <Link
                        className="group grid h-auto w-full justify-start gap-1"
                        href="/content-marketing">
                        <div className="text-sm font-medium leading-none group-hover:underline text-white">
                          Content Marketing
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Elevate your brand with our content marketing services
                        </div>
                      </Link>
                      <Link
                        className="group grid h-auto w-full justify-start gap-1"
                        href="/marketing-strategy">
                        <div className="text-sm font-medium leading-none group-hover:underline text-white">
                          Marketing Strategy
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Discover more about our services.
                        </div>
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
              <CardContent>Partnership Ecosystem</CardContent>
              <CardContent>Marketing Research</CardContent>
              <CardContent>Organizational Audit</CardContent>
              <CardContent>Support Function</CardContent>
            </Card>
            <div className="flex flex-col gap-y-4 items-start mt-2">
              <h1 className="font-bold text-[24px] leading-[32px] text-[#00092C] my-2">
                Contact info
              </h1>
              <div className="inline-flex">
                <MapPin className="mr-2 h-10 w-10" color="#fe7146" />
                <span className="text-[16px] leading-7 text-[#555555] font-be_vietnam_pro">
                  56 Glassford Street Glasgow G1 1UL New York
                </span>
              </div>
              <div className="inline-flex">
                <Phone className="mr-2" color="#fe7146" />
                <span className="text-[16px] leading-7 text-[#555555] font-be_vietnam_pro">
                  1-982-782-5297 <br /> 1-982-125-6378
                </span>
              </div>
              <div className="inline-flex">
                <Mail className="mr-2" color="#fe7146" />
                <span className="text-[16px] leading-7 text-[#555555] font-be_vietnam_pro">
                  contact@example.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
