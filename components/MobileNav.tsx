'use client';
import mirchLogo from "@/public/mirchLogoMain.svg"
import { Menu, ChevronRight,  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import Image from "next/image";

export default function MobileNav() {
return  <Sheet>
<SheetTrigger asChild>
  <Button className="ml-auto " size="icon" variant="outline">
    <Menu className="h-6 w-6" color="#fefbfb" />
    <span className="sr-only">Toggle navigation menu</span>
  </Button>
</SheetTrigger>
<SheetContent side="left" className="bg-white">
  <Link className="flex items-center gap-2 text-black" href="#">
    <Image src={mirchLogo} alt='mirch logo' />
  </Link>
  <div className="grid gap-4 py-6">
    <Link className="flex w-full items-center py-2 text-lg font-semibold text-black" href="#">
      Home
    </Link>
    <Link className="flex w-full items-center py-2 text-lg font-semibold text-black" href="#">
      About Us
    </Link>
    <Collapsible className="grid gap-4">
      <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold text-black [&[data-state=open]>svg]:rotate-90">
        Services
        <ChevronRight className="ml-auto h-5 w-5 transition-all" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="-mx-6 grid gap-6 p-6">
          <Link className="group grid h-auto w-full justify-start gap-1" href="/content-marketing">
            <div className="text-sm font-medium leading-none group-hover:underline text-black">Content Marketing</div>
            <div className="line-clamp-2 text-sm leading-snug text-gray-500">Elevate your brand with our content marketing services.</div>
          </Link>
          <Link className="group grid h-auto w-full justify-start gap-1" href="#">
            <div className="text-sm font-medium leading-none group-hover:underline text-black">Item 2</div>
            <div className="line-clamp-2 text-sm leading-snug text-gray-500">Explore our other service offerings.</div>
          </Link>
          <Link className="group grid h-auto w-full justify-start gap-1" href="#">
            <div className="text-sm font-medium leading-none group-hover:underline text-black">Item 3</div>
            <div className="line-clamp-2 text-sm leading-snug text-gray-500">Discover more about our services.</div>
          </Link>
        </div>
      </CollapsibleContent>
    </Collapsible>
    <Link className="flex w-full items-center py-2 text-lg font-semibold text-black" href="#">
      TV
    </Link>
    <Link className="flex w-full items-center py-2 text-lg font-semibold text-black" href="#">
      Contact
    </Link>
  </div>
</SheetContent>
</Sheet>
}