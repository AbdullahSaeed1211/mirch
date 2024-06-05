import Link from "next/link";
import mirchLogo from "@/public/mirchLogo.svg";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6 bg-[#000b47]">
      <div className="flex items-center">
        <Link className="flex items-center gap-2 text-white" href="/">
          <Image src={mirchLogo} alt="mirch logo" className="h-10 w-auto" />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center text-white space-x-8">
        <Link className="py-2font-poppins text-lg font-medium text-[22px] leading-[22px] cursor-pointer hover:text-mirch-pink" href="/">
          Home
        </Link>
        <Link className="py-2 font-poppins text-lg font-medium text-[22px] leading-[22px] cursor-pointer hover:text-mirch-pink" href="/#about">
          About Us
        </Link>
        <DropdownMenu >
          <DropdownMenuTrigger>
            <div className="flex items-center font-poppins text-lg font-medium text-[22px] leading-[22px] cursor-pointer">
              Our Services
              <ChevronDown className="ml-2 h-5 w-5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='center' className="bg-[#000b47] border border-[#000b47]"  forceMount>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild  >
              <Link href="/services" className="text-white ">
                Services Page
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem asChild>
              <Link href="/content-marketing" className="text-white">
                Content Marketing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/marketing-strategy " className="text-white">
                Marketing Strategy
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link className="py-2 font-poppins text-lg font-medium text-[22px] leading-[22px] cursor-pointer hover:text-mirch-pink" href="/">
          Our Works
        </Link><Link className="py-2 font-poppins text-lg font-medium text-[22px] leading-[22px] cursor-pointer hover:text-mirch-pink" href="/">
          Mirch TV
        </Link>
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <Link href="/contact" className="px-4 py-2 bg-mirch-pink text-white font-semibold rounded hover:bg-mirch-pink/90">
          Contact Us
        </Link>
      </div>
      <MobileNav />
    </header>
  );
}
