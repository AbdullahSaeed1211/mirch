import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function partnership() {
  return (
    <>
      <div className="min-h-full w-full Wlg:min-h-10 text-white lg:items-start flex flex-col   gap-y-10 lg:gap-y-20 py-20 lg:px-40 px-[20px] bg-[#c4c4c4] items-center">
            <h1 className="font-extrabold font-abhaya text-[72px] leading-[65px] lg:text-[120px] lg:leading-[110px] tracking-tight">
                Are you <br />
                looking for <br />
                <span className="font-playfair font-normal lg:leading-[110px]
                italic lg:text-[120px]">partnership?</span> <br />
            </h1>
          <div>
            <Button className="bg-[#F14E23] rounded-full flex gap-x-1 font-bold">
              Contact us
              <ArrowUpRight className="bg-black/15 rounded-full h-4 w-4" />
            </Button>
          </div>
          </div>
    </>
  );
}
