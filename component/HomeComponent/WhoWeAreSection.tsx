const WhoWeAreSection = () => {
  return (
    <section className="who-we-are" id="whoWeAre">
      <div className="who-container">
        <div className="who-content">
          <span className="who-label">
            <span className="who-line"></span>
            Who We Are
          </span>

          <h2 className="who-title">
            Architecting the Future of
            <span>Digital Enterprise</span>
          </h2>

          <p className="who-text">
            We are a global team of cloud architects, data scientists, and
            engineers dedicated to solving the most complex digital challenges.
          </p>

          <p className="who-text">
            From migrating legacy infrastructure to the cloud to implementing
            state-of-the-art AI solutions, AtlasGeek partners with you to ensure
            your technology drives your business forward.
          </p>

          <a href="#" className="who-link">
            Read our full story <span>→</span>
          </a>
        </div>

        <div className="who-media">
          <img
            src="who-we-are.jpeg"
            width={568}
            alt="AtlasGeek Team"
            className="who-image"
          />

          <div className="trust-card">
            <div className="trust-info">
              <span>Trusted by</span>
              <strong>500+ Companies</strong>
            </div>

            <div className="trust-avatars">
              <span></span>
              <span></span>
              <span></span>
              <span className="trust-more">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
