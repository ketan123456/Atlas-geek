const HeroSection = () => {
  return (
    <section className="hero hero-section" id="siteHeader">
      <div className="hero-container">
        <span className="hero-badge">Next Gen Cloud Solutions</span>

        <h1 className="hero-title">
          About the <span className="hero-title-gradient">AtlasGeek</span>
        </h1>

        <p className="hero-subtitle">
          Empowering businesses with cutting-edge cloud solutions, AI
          integration, and digital transformation strategies.
        </p>

        <form className="hero-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="What can we help you find?"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        <div className="hero-actions">
          <a href="#" className="btn-primary">
            Get Started <span>→</span>
          </a>
          <a href="#" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
