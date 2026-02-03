const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Headquarters</strong>
              <p>
                123 Innovation Drive, Suite 400
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>
                +1 (555) 123-4567
                <br />
                <small>Mon–Fri 9am–6pm PST</small>
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>support@atlasgeek.com</p>
            </div>
          </div>

          <section className="map-section">
            <iframe
              src="https://www.google.com/maps?q=Dublin%20Castle&output=embed"
              style={{ height: "270px", borderRadius: "20px" }}
              loading="lazy"
            />
          </section>
        </div>

        <div className="contact-form-card">
          <h3>Send us a Message</h3>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="General Inquiry" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?" />
            </div>

            <button type="submit" className="submit-btn">
              Send Message ✈
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
