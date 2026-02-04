import React from "react";
import CareersHero from "../../../component/CareerComponent/CareersHero";
import OpenPositionsSection from "../../../component/CareerComponent/OpenPositionsSection";
import WhyWorkSection from "../../../component/CareerComponent/WhyWorkSection";
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
