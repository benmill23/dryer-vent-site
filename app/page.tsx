import JsonLd from "@/components/JsonLd";
import Hero from "@/components/sections/Hero";
import Risks from "@/components/sections/Risks";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Reviews from "@/components/sections/Reviews";
import ServiceArea from "@/components/sections/ServiceArea";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Risks />
      <Services />
      <Pricing />
      <Process />
      <WhyUs />
      <Reviews />
      <ServiceArea />
      <Faq />
      <Contact />
    </>
  );
}
