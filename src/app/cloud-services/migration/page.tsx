import React from "react";
import HeroSection from "../../../../props/HeroSection";
import OverviewOfferSection from "../../../../props/OverviewOfferSection";

const page = () => {
  return (
    <>
      <HeroSection
        containerClass="hero-cloud"
        breadcrumb="CLOUD SERVICES > CLOUD ARCHITECTURE & MIGRATION"
        title="Cloud Architecture & Migration"
        subtitle="Build a robust foundation for your digital future."
        primaryButton={{ label: "Schedule Consultation" }}
        secondaryButton={{ label: "Explore Other Solutions" }}
      />
      <OverviewOfferSection
        containerClass="overview-cloud"
        overviewTitle="Overview"
        overviewText="We design resilient, scalable, and secure cloud architectures that align with your business objectives. Our migration experts ensure a seamless transition to the cloud with minimal disruption."
        benefits={[
          { label: "High Availability" },
          { label: "Scalability on Demand" },
          { label: "Enhanced Performance" },
          { label: "Future-Proof Design" },
        ]}
        offerTitle="What We Offer"
        offers={[
          {
            title: "Cloud Native Architecture",
            description:
              "Design applications specifically for cloud environments.",
          },
          {
            title: "Hybrid & Multi-Cloud Design",
            description:
              "Integrate on-premise and cloud resources seamlessly.",
          },
          {
            title: "Microservices Implementation",
            description:
              "Break down monoliths into manageable services",
          },
          {
            title: "Disaster Recovery Planning",
            description: "Ensure business continuity with robust DR strategies.",
          },
        ]}
      />
    </>
  );
};

export default page;

