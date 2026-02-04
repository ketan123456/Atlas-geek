const WhyWorkSection = () => {
  return (
    <section className="why-work">
      <div className="why-container">
        <div className="why-header">
          <h2>Why Work Here?</h2>
          <p>
            We believe in taking care of our people so they can take care of our
            clients.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">❤️</div>
            <h3>Health & Wellness</h3>
            <p>
              Comprehensive medical, dental, and vision coverage for you and
              your family.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🌍</div>
            <h3>Remote Friendly</h3>
            <p>
              Work from anywhere. We believe in results, not hours in a chair.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🎓</div>
            <h3>Growth & Learning</h3>
            <p>Annual stipend for courses, conferences, and certifications.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">☕</div>
            <h3>Work-Life Balance</h3>
            <p>Unlimited PTO and flexible working hours.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3>Latest Tech</h3>
            <p>
              We provide top-of-the-line equipment for your home office setup.
            </p>
          </div>

          <div className="why-card"> 
            <div className="why-icon">💼</div>
            <h3>Competitive Pay</h3>
            <p>Salary packages that reflect your expertise and contribution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkSection;
