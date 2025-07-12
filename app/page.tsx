import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HeroSectionComponent from "@/components/hero";
import Features from "@/components/Features";
import PricingTable from "@/components/pricing";
import FAQcomponent from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center ">
      <HeroSectionComponent />
      <Features />
      <PricingTable />
      <FAQcomponent />
      <Footer />
    </section>
  );
}
