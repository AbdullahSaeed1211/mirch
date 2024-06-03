
import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/mirchLogo.svg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Our Works', href: '/works' },
  { name: 'Mirch TV', href: '/tv' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  return (
    <nav className="relative w-full flex flex-row items-center px-4 md:px-20 lg:px-32 py-5 bg-[#000b47] justify-between">
      <div className="flex items-center">
        <Image src={Logo} alt="Mirch Media Logo" width={150} height={50} />
      </div>
      <div className="flex space-x-4 text-white">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <p className="hover:text-mirch-pink">{link.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
