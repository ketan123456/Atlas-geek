import React from "react";
import HeroSection from "../../../../props/HeroSection";
import OverviewOfferSection from "../../../../props/OverviewOfferSection";

const ai = () => {
  return (
    <>
      <HeroSection
        breadcrumb="SOLUTIONS > ARTIFICIAL INTELLIGENCE"
        title="Artificial Intelligence"
        subtitle="Transform your business with intelligent solutions."
        containerClass="hero-ai"
        primaryButton={{ label: "Schedule Consultation" }}
        secondaryButton={{ label: "Explore Other Solutions" }}
      />
      <OverviewOfferSection
        containerClass="overview-ai"
        overviewTitle="Overview"
        overviewText="Harness the power of AI to automate processes, gain predictive insights, and create personalized customer experiences. We help you move from proof-of-concept to production-grade AI."
        benefits={[
          { label: "Operational Efficiency" },
          { label: "Data-Driven Decisions" },
          { label: "Enhanced Customer Experience" },
          { label: "Competitive Advantage" },
        ]}
        offerTitle="What We Offer"
        offers={[
          {
            title: "Generative AI",
            description:
              "Create content and code with cutting-edge LLMs.",
          },
          {
            title: "Computer Vision",
            description: "Automate visual inspection and analysis.",
          },
          {
            title: "Natural Language Processing",
            description: "Build chatbots and sentiment analysis tools.",
          },
          {
            title: "Predictive Analytics",
            description: "Forecast trends and customer behavior.",
          },
        ]}
      />
    </>
  );
};

export default ai;
