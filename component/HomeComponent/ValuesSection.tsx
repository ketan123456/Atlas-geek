const ValuesSection = () => {
  return (
    <section className="values">
      <div className="values-container">
        <div className="values-header">
          <h2>Our Values</h2>
          <p>The principles that guide everything we do</p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon purple">⚡</div>
            <h3>Innovation</h3>
            <p>Constantly pushing boundaries.</p>
          </div>

          <div className="value-card highlight">
            <div className="value-icon blue">🛡️</div>
            <h3>Integrity</h3>
            <p>Honest and transparent communication.</p>
          </div>

          <div className="value-card">
            <div className="value-icon green">👥</div>
            <h3>Collaboration</h3>
            <p>Success through teamwork.</p>
          </div>

          <div className="value-card">
            <div className="value-icon red">📊</div>
            <h3>Excellence</h3>
            <p>Delivering the highest quality results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
