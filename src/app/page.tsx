"use client";

import { Platforms } from "./home/ui/Platforms";
import { Products } from "./home/ui/Products";
import { Features } from "./home/ui/Features";
import { Roadmap } from "./home/ui/Roadmap";
import { Faq } from "./home/ui/Faq";
import { HomeHero } from "./home/ui/Hero";
import { PreSaleDeal } from "@/widgets/ui";
import { Ellipses } from "./home/ui/Ellipses";

const MainPage = () => {
  return (
    <>
      <HomeHero />
      <Platforms />
      <Products />
      <Features />
      <Roadmap />
      <Faq />
      <PreSaleDeal />
      <Ellipses />
    </>
  );
};

export default MainPage;
