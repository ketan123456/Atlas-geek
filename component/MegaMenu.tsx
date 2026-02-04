"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <div className="mega-menu">
      <div className="mega-container">
        {/* Left */}
        <div className="mega-intro">
          <h4>{title}</h4>
          <p>{description}</p>
         
        </div>

        {/* Right */}
        <div className="mega-links">
          {links.map((item) => {
            const isActive = item.href === pathname;

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className={isActive ? "active" : ""}>
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
