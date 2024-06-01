import About from "@/components/home/About";
import Hero from "@/components/home/Home";
import Services from "@/components/home/Services";
import Slayer from "@/components/home/Slayer";
import Incredible from "@/components/home/Incredible";
import Grow from "@/components/home/Grow";
import CTA from "@/components/CTA";
import ConvertToBrands from "@/components/home/ConvertToBrands";
import Trusted from "@/components/home/Trusted";
import Partnership from "@/components/home/Contact";
import Expertise from "@/components/home/Expertise";
import CaseStudies from "@/components/home/CaseStudies";
import AllServices from "@/components/home/AllServices";
import FAQ from "@/components/home/FAQ";
import Testimonial from "@/components/home/Testimonials";
import Blogs from "@/components/home/Blogs";
import GetInTouch from "@/components/home/GetInTouch";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Slayer />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <About />
        <Services />
      </div>
      <Incredible />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Grow />
        <CTA />
        <ConvertToBrands />
        <Trusted />
      </div>
      <Partnership />
      <Expertise />
      <CaseStudies />
      <AllServices />
      <Testimonial />
      <FAQ />
      <Blogs />
      <GetInTouch />
      <Newsletter />
    </>
  );
}
