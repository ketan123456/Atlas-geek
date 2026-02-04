import AnimatedNumber from "../AnimatedNumber";

const StatsSection = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat">
          <h3>
            <AnimatedNumber value={15} suffix="+" />
          </h3>
          <p>Years of Experience</p>
        </div>

        <div className="stat">
          <h3>
            <AnimatedNumber value={500} suffix="+" />
          </h3>
          <p>Projects Delivered</p>
        </div>

        <div className="stat">
          <h3>
            <AnimatedNumber value={120} suffix="+" />
          </h3>
          <p>Cloud Experts</p>
        </div>

        <div className="stat">
          <h3>
            <AnimatedNumber value={98} suffix="%" />
          </h3>
          <p>Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
