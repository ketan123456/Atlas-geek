import clsx from "clsx";
import "./OverviewOfferSection.css";
type Benefit = {
  label: string;
};

type OfferItem = {
  title: string;
  description: string;
};

type OverviewOfferSectionProps = {
  overviewTitle: string;
  overviewText: string;
  benefits: Benefit[];
  offerTitle: string;
  offers: OfferItem[];
  containerClass?: string;
};

export default function OverviewOfferSection({
  overviewTitle,
  overviewText,
  benefits,
  offerTitle,
  offers,
  containerClass,
}: OverviewOfferSectionProps) {
  return (
    <section className={clsx("overview-section", containerClass)}>
      <div className="overview-grid">
        {/* LEFT */}
        <div>
          <h2 className="overview-heading">{overviewTitle}</h2>
          <p className="overview-text">{overviewText}</p>

          <h3 className="benefits-heading">Key Benefits</h3>

          <div className="benefits-grid">
            {benefits.map((item, idx) => (
              <div key={idx} className="benefit-card">
                <span className="benefit-icon">✓</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
              <div className={clsx("offer-card", containerClass)}>
          <h3 className="offer-heading">{offerTitle}</h3>

          <div className="offer-list">
            {offers.map((item, idx) => (
              <div key={idx} className="offer-item">
                <div className="offer-number">{idx + 1}</div>
                <div>
                  <div className="offer-title">{item.title}</div>
                  <div className="offer-text">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
