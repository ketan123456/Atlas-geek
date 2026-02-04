import React from "react";
import HeroSection from "../../../../props/HeroSection";
import OverviewOfferSection from "../../../../props/OverviewOfferSection";

const page = () => {
  return (
    <>
      <HeroSection
        containerClass="hero-cloud"
        breadcrumb="SOLUTIONS > INFRASTRUCTURE MODERNIZATION"
        title="Infrastructure Modernization"
        subtitle="Upgrade your IT backbone for the digital age."
        primaryButton={{ label: "Schedule Consultation" }}
        secondaryButton={{ label: "Explore Other Solutions" }}
      />
      <OverviewOfferSection
        containerClass="overview-cloud"
        overviewTitle="Overview"
        overviewText="Legacy infrastructure can hold you back. We help you modernize your IT estate to improve performance, reduce technical debt, and enable innovation."
        benefits={[
          { label: "Increased Agility" },
          { label: "Lower Maintenance Overhead" },
          { label: "Improved Reliability" },
          { label: "Scalability" },
        ]}
        offerTitle="What We Offer"
        offers={[
          {
            title: "Serverless Computing",
            description: "Run code without provisioning or managing servers.",
          },
          {
            title: "Container Orchestration",
            description: "Manage containers at scale with Kubernetes.",
          },
          {
            title: "Infrastructure as Code",
            description: "Automate infrastructure provisioning with Terraform.",
          },
          {
            title: "Edge Computing",
            description: "Process data closer to the source for lower latency.",
          },
        ]}
      />
    </>
  );
};

export default page;
