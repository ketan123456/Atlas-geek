import React from "react";
import HeroSection from "../../../../props/HeroSection";
import OverviewOfferSection from "../../../../props/OverviewOfferSection";

const page = () => {
  return (
    <>
      <HeroSection
        containerClass="hero-cloud"
        breadcrumb="SOLUTIONS > APP MODERNIZATION"
        title="Modernization"
        subtitle="Innovative solutions for your digital journey."
        primaryButton={{ label: "Schedule Consultation" }}
        secondaryButton={{ label: "Explore Other Solutions" }}
      />
      <OverviewOfferSection
        containerClass="overview-cloud"
        overviewTitle="Overview"
        overviewText="We are currently tailoring this specific solution page to better serve your needs. Contact our team for detailed information about this service."
        benefits={[
          { label: "Industry Leading Expertise" },
          { label: "Proven Track Record" },
          { label: "Cost-Effective Solutions" },
          { label: "Rapid Deployment" },
        ]}
        offerTitle="What We Offer"
        offers={[
          {
            title: "Expert Consultation",
            description:
              "Speak directly with our specialists about your requirements.",
          },
          {
            title: "Custom Implementation",
            description:
              "Tailored solutions designed to fit your unique business context.",
          },
          {
            title: "24/7 Support",
            description:
              "Round-the-clock monitoring and support for all our implementations.",
          },
          {
            title: "Scalable Architecture",
            description: "Built to grow with your business needs.",
          },
        ]}
      />
    </>
  );
};

export default page;
