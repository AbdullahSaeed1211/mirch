import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import mirchlogomain from "@/public/mirchLogoMain.svg";
import insta from "@/public/home/insta.svg";
import facebook from "@/public/home/facebook.svg";
const quickLinks = [
  { href: "/", text: "About Us" },
  { href: "/", text: "Meet Our Expertise" },
  { href: "/", text: "Services" },
  { href: "/", text: "Our Blog" },
  { href: "/", text: "Our Process" },
  { href: "/", text: "Contact Us" },
];

// Follow us array
const followUs = [
  {
    logo: facebook, // Replace with your logo path
    link: "https://www.facebook.com/", // Replace with your Facebook page URL
    name: "Facebook",
  },
  {
    logo: insta, // Replace with your Instagram logo path
    link: "https://www.instagram.com/", // Replace with your Instagram page URL
    name: "Instagram",
  },
];
export default function Newsletter() {
  return (
    <div className="my-10 text-justify px-[20px] lg:container lg:px-20 mx-auto h-full">
      <div className="grid lg:grid-cols-4 gap-x-8 gap-y-2 justify-end w-full">
        <div className="col-span-2 py-2  justify-between">
          <div className="flex flex-col gap-y-4 justify-between h-full">
            <Image src={mirchlogomain} alt="logo" />
            <p>Join our newsletter to stay up date on features</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border-slate-700 "
              />
              <Button className="bg-[#3B84AC] rounded-lg text-white">
                Subscribe
              </Button>
            </div>
            <p>
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 items-start">
          <h1>Quick Links</h1>

          <ul className="flex flex-col gap-y-4 h-full">
            {quickLinks.map((link) => (
              <li
                key={link.text}
                className="font-inter font-normal text-[14px] leading-[21px] text-[#02061A]">
                {link.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1>Follow Us</h1>
          <ul className="flex flex-col h-full gap-y-4">
            {followUs.map((platform) => (
              <li key={platform.name}>
                <div className="flex gap-x-2">
                  <Image src={platform.logo} alt={`${platform.name} Logo`} />
                  <Link
                    href={platform.link}
                    target="_blank"
                    className="font-inter font-normal text-[14px] leading-[21px text-[#02061A]">
                    {platform.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
