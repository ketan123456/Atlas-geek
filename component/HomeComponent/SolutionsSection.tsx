const SolutionsSection = () => {
  return (
    <section className="solutions">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2 className="solutions-title">Built to Help You Thrive</h2>
          <p className="solutions-subtitle">
            Tailored, scalable, and secure solutions designed for every stage of
            your business growth.
          </p>
        </div>

        <div className="solutions-grid">
          <div className="solution-card orange">
            <div className="solution-icon">⚡</div>
            <h3>Startups</h3>
            <p>
              Scale rapidly with cloud-native architectures designed for
              flexibility and cost-efficiency.
            </p>
            <a href="#">
              Explore Solutions <span>→</span>
            </a>
          </div>

          <div className="solution-card blue">
            <div className="solution-icon">🏢</div>
            <h3>Enterprises</h3>
            <p>
              Modernize legacy systems and optimize operations with
              enterprise-grade security and reliability.
            </p>
            <a href="#">
              Explore Solutions <span>→</span>
            </a>
          </div>

          <div className="solution-card green">
            <div className="solution-icon">🌍</div>
            <h3>Public Sector</h3>
            <p>
              Secure, compliant cloud solutions that serve the public interest
              and drive community innovation.
            </p>
            <a href="#">
              Explore Solutions <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
