import Link from "next/link";
import mirchLogo from "@/public/mirchLogo.svg";
import MobileNav from "./MobileNav";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6 bg-[#000b47]">
      <div className="flex-1">
        <Link className="flex items-center gap-2 text-white" href="#">
          <Image src={mirchLogo} alt="mirch logo" />
        </Link>
      </div>
      <nav className="hidden md:flex gap-4"></nav>
      <MobileNav />
    </header>
  );
}
