import Link from "next/link";

const services = [
  { name: "Search Engine Optimization", link: "#seo" },
  { name: "Social Media Marketing", link: "#social-media" },
  { name: "Content Marketing", link: "#content-marketing" },
  { name: "Email Marketing", link: "#email-marketing" },
  { name: "Web Design & Optimization", link: "#web-design" },
  { name: "Web Analytics & Reporting", link: "#web-analytics" },
];

export default function Pricing() {
  return (
    <div className="grid gap-y-4 lg:gap-x-4 lg:grid-cols-2 w-full h-full items-center justify-evenly mt-5 lg:mt-10">
      <div className="text-start font-lato text-[#757575] lg:text-[24px] lg:leading-[34px]">
        Create valuable content that attracts and engages your target audience.
        Our content marketing services include developing a content strategy,
        researching and identifying topics that will resonate with your
        audience, creating and optimizing content such as blog posts,
        infographics, videos, and more, and distributing and promoting your
        content through social media, email marketing, and other channels.{" "}
        <br />
        Marketiva is a leading content marketing company that specializes in
        creating and distributing high-quality content that engages and informs
        target audiences. Our services include content strategy development,
        content creation, distribution, and measurement. Our team of experienced
        content marketers works closely with clients to understand their
        business goals and target audience, and then develops a content
        marketing plan that aligns with the business goals and client target
        market.
      </div>
      <div className=" flex-col items-center justify-between font-montserrat ">
        <ul className="flex flex-col gap-y-5 w-auto items-center bg-[#002463] rounded-xl p-4 hover:px-0 py-10">
          {services.map((service) => (
            <li
              key={service.name}
              className="font-montserrat font-bold text-[20px] leading-[32px] w-full text-center hover:bg-mirch-pink hover:">
              <Link href={service.link} className="text-[#FDFCFC]">
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="inline-flex w-full gap-2  items-center justify-evenly mt-2 md:mt-4">
          <p className="text-[#757575] text-lg">Starts From</p>
          <span className=" text-[32px] md:text-[64px] md:leading-[74px] font-extrabold text-mirch-pink">
            $ 99.00
          </span>
          <button className="mt-2 px-6 lg:px-[40px] py-2 bg-mirch-pink text-white font-bold rounded-xl">
            Order Service
          </button>
        </div>
      </div>
    </div>
  );
}
