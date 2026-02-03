const StorySection = () => {
  return (
    <section className="story">
      <div className="story-container">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, AtlasGeek began with a simple mission: to help
            businesses navigate the complexities of the emerging cloud
            landscape. What started as a small consultancy has grown into a
            global powerhouse for digital transformation.
          </p>
          <p>
            We believe that technology should be an enabler, not a bottleneck.
            Over the years, we've partnered with startups and Fortune 500
            companies alike, delivering bespoke solutions that drive efficiency,
            security, and growth.
          </p>
          <p>
            Today, we continue to push the boundaries of what's possible,
            exploring new frontiers in AI, machine learning, and hybrid cloud
            architectures.
          </p>
        </div>

        <div className="story-image">
          <img src="team_collab.jpeg" alt="Team collaboration" />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
