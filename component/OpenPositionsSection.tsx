import JobCard from "./JobCard";

const OpenPositionsSection = () => {
  return (
    <section className="open-positions" id="open-positions">
      <div className="positions-container">
        <h2 className="positions-title">Open Positions</h2>

        <JobCard
          title="Senior Cloud Architect"
          meta="Engineering · Remote (US) · Full-time"
          slug="senior-cloud-architect"
        />

        <JobCard
          title="DevOps Engineer"
          meta="Engineering · New York, NY · Full-time"
          slug="devops-engineer"
        />

        <JobCard
          title="Product Marketing Manager"
          meta="Marketing · London, UK · Full-time"
          slug="product-marketing-manager"
        /> 

        <JobCard
          title="Solutions Consultant"
          meta="Sales · Remote (EMEA) · Full-time"
          slug="solutions-consultant"
        />

        <JobCard
          title="UX/UI Designer"
          meta="Design · San Francisco, CA · Contract"
          slug="ux-ui-designer"
        />
      </div>
    </section>
  );
};

export default OpenPositionsSection;
