import React from "react";
import CareersHero from "../../../component/careerComponen/CareersHero";
import OpenPositionsSection from "../../../component/careerComponen/OpenPositionsSection";
import WhyWorkSection from "../../../component/careerComponen/WhyWorkSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Geek-Careers",
  description: "Latest articles, tutorials, and insights from Atlas Geek.",
  alternates: {
    canonical: "/careers",
  },
};
const page = () => {
  return (
    <>
      <CareersHero />
      <main>
        <WhyWorkSection />
        <OpenPositionsSection />
      </main>
    </>
  );
};

export default page;
