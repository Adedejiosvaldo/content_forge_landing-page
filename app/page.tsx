import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HeroSectionComponent from "@/components/hero";
import Features from "@/config/Features";
import PricingTable from "@/components/pricing";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <HeroSectionComponent />
      <Features />
      <PricingTable />
    </section>
  );
}
