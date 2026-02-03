import Link from "next/link";

interface MegaMenuProps {
  title: string;
  description: string;
  links: {
    label: string;
    description: string;
    href?: string;
  }[];
}

const MegaMenu = ({ title, description, links }: MegaMenuProps) => {
  return (
    <div className="mega-menu">
      <div className="mega-container">
        {/* Left */}
        <div className="mega-intro">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href="#" className="view-all">
            View all →
          </a>
        </div>

        {/* Right */}
        <div className="mega-links">
          {links.map((item) => (
            <Link key={item.label} href={item.href || "#"}>
              <strong>{item.label}</strong>
              <span>{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
