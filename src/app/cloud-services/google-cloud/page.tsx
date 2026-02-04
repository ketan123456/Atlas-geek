import React from "react";
import HeroSection from "../../../../props/HeroSection";
import OverviewOfferSection from "../../../../props/OverviewOfferSection";

const googleCloud = () => {
  return (
    <>
      <HeroSection
        breadcrumb="CLOUD SERVICES > GOOGLE CLOUD SERVICES"
        title="Google Cloud Services"
        subtitle="Accelerate your digital transformation with the power of Google Cloud Platform."
        containerClass="hero-cloud"
        primaryButton={{ label: "Schedule Consultation" }}
        secondaryButton={{ label: "Explore Other Solutions" }}
      />
      <OverviewOfferSection
        containerClass="overview-ai"
        overviewTitle="Overview"
        overviewText="As a premier Google Cloud Partner, we help you leverage the full potential of GCP to build scalable, secure, and intelligent applications. From migration to modernization, our experts are with you every step of the way.
"
        benefits={[
          { label: "99.99% Uptime SLA" },
          { label: "Global Network Scale" },
          { label: "Advanced Security by Design" },
          { label: "Sustainable Infrastructure" },
        ]}
        offerTitle="What We Offer"
        offers={[
          {
            title: "Infrastructure as a Service",
            description: "Deploy and manage virtual machines with Compute Engine.",
          },
          {
            title: "Big Data & Analytics",
            description: "Unlock insights with BigQuery and Dataflow.",
          },
          {
            title: "Application Modernization",
            description: "Containerize apps with Kubernetes Engine (GKE).",
          },
          {
            title: "AI & Machine Learning",
            description: "Build smart apps with Vertex AI and TensorFlow.",
          },
        ]}
      />
    </>
  );
};

export default googleCloud;
