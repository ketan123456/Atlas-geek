import React from "react";
import CareersHero from "../../../component/CareerComponent/CareersHero";
import OpenPositionsSection from "../../../component/CareerComponent/OpenPositionsSection";
import WhyWorkSection from "../../../component/CareerComponent/WhyWorkSection";

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
