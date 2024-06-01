'use client';

import Image from "next/image";
import Logo from '@/public/mirchLogo.svg';

export default function Navbar() {
return(
    <nav className="relative w-full flex flex-row items-center px-4 md:px-20 py-5 bg-[#000b47] justify-between">

        <div className="items-center">
            <Image src={Logo} alt="Mirch Media Logo"/>
        </div>
        <div className="items-center text-white">
            Contact
        </div>
    </nav>
)
}