import React from "react";
import HeroSection from "../../../../props/HeroSection";
import OverviewOfferSection from "../../../../props/OverviewOfferSection";

const googleCloud = () => {
  return (
    <>
      <HeroSection
        breadcrumb="CLOUD SERVICES > CLOUD CONSULTING"
        title="Cloud Consulting"
        subtitle="Strategic guidance for your cloud journey."
        containerClass="hero-ai"
        primaryButton={{ label: "Schedule Consultation" }}
        secondaryButton={{ label: "Explore Other Solutions" }}
      />
      <OverviewOfferSection
        containerClass="overview-ai"
        overviewTitle="Overview"
        overviewText="Our cloud consulting services provide the roadmap you need to navigate the complexities of cloud adoption. We assess your current state, define your future vision, and build a pragmatic plan to get you there."
        benefits={[
          { label: "Reduced IT Costs" },
          { label: "Faster Time to Market" },
          { label: "Improved Agility" },
          { label: "Risk Mitigation" },
        ]}
        offerTitle="What We Offer"
        offers={[
          {
            title: "Cloud Readiness Assessment",
            description:
              "Evaluate your infrastructure and applications for cloud suitability.",
          },
          {
            title: "Migration Strategy",
            description: "Develop a low-risk migration plan tailored to your business goals.",
          },
          {
            title: "Cost Optimization",
            description: "Analyze and reduce your cloud spend without compromising performance.",
          },
          {
            title: "Security & Compliance",
            description: "Ensure your cloud environment meets industry standards and regulations.",
          },
        ]}
      />
    </>
  );
};

export default googleCloud;
