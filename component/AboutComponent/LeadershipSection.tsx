const LeadershipSection = () => {
  return (
    <section className="leadership">
      <div className="leadership-header">
        <h2>Meet the Leadership</h2>
        <p>
          Our diverse team of experts brings together decades of experience
          across technology, business, and innovation.
        </p>
      </div>

      <div className="leaders">
        <div className="leader-card">
          <img src="founder.jpeg" alt="Sarah Johnson" />
          <h4>Sarah Johnson</h4>
          <span>CEO & Founder</span>
        </div>

        <div className="leader-card">
          <img src="founder.jpeg" alt="Michael Chen" />
          <h4>Michael Chen</h4>
          <span>CTO</span>
        </div>

        <div className="leader-card">
          <img src="founder.jpeg" alt="David Miller" />
          <h4>David Miller</h4>
          <span>Head of Innovation</span>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
