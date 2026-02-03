const PartnerSection = () => {
  return (
    <section className="partner">
      <div className="partner-container">
        <div className="partner-content">
          <h2 className="partner-title">
            Why Partner with <span>AtlasGeek?</span>
          </h2>

          <p className="partner-subtitle">
            We don't just provide services; we build long-term partnerships
            rooted in trust, transparency, and technical excellence.
          </p>

          <ul className="partner-list">
            <li className="partner-item">
              <span className="partner-icon">🛡️</span>
              Certified Cloud Experts across Google, AWS, and Azure
            </li>
            <li className="partner-item">
              <span className="partner-icon">🌍</span>
              24/7 Global Support and Monitoring
            </li>
            <li className="partner-item">
              <span className="partner-icon">🏆</span>
              Proven track record with Fortune 500 companies
            </li>
            <li className="partner-item">
              <span className="partner-icon">📈</span>
              Cost-effective strategies that maximize ROI
            </li>
          </ul>
        </div>

        <div className="partner-media">
          <img
            src="partner.jpeg"
            alt="Cloud Infrastructure"
            className="partner-image"
          />

          <div className="uptime-card">
            <div className="uptime-icon">🖥️</div>
            <div>
              <strong>99.99% Uptime</strong>
              <p>
                Guaranteed reliability for your mission-critical applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
