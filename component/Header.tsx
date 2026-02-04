"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "./icon/icon";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const pathname = usePathname();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<null | "solutions" | "cloud">(
    null,
  );

  const isPathActive = (basePath: string) =>
    pathname === basePath || pathname.startsWith(`${basePath}/`);

  const toggleMenu = () => {
    if (window.innerWidth >= 1025) return;
    setIsMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    if (window.innerWidth >= 1025) return;
    document.body.style.overflow = isMobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setIsMobileOpen(false);
        setActiveMega(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header" id="siteHeader">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image src="/Logo.jpeg" alt="Atlas Geek" width={100} height={70} />
        </Link>

        <nav className={`mobile-nav ${isMobileOpen ? "active" : ""}`}>
          <div className="nav nav-inner">
            <div
              className={`nav-item has-mega ${isPathActive("/solutions") ? "active" : ""}`}>
              <button
                className={`nav-link ${activeMega === "solutions" ? "open" : ""}`}
                onClick={() =>
                  setActiveMega(activeMega === "solutions" ? null : "solutions")
                }>
                Solutions <Arrow />
              </button>

              <MegaMenu
                title="SOLUTIONS"
                description="Explore our comprehensive suite of solutions designed to scale your business."
                links={[
                  {
                    label: "AI",
                    description: "Learn more about AI",
                    href: "/solutions/ai",
                  },
                  {
                    label: "Cloud Security",
                    description: "Learn more about cloud security",
                    href: "/solutions/cloud-security",
                  },
                  {
                    label: "Infrastructure Modernization",
                    description:
                      "Learn more about infrastructure modernization",
                    href: "/solutions/infrastructure",
                  },
                  {
                    label: "Productivity & Collaboration",
                    description:
                      "Learn more about productivity & collaboration",
                    href: "/solutions/productivity-collaboration",
                  },
                  {
                    label: "App Modernization",
                    description: "Learn more about app modernization",
                    href: "/solutions/app-modernization",
                  },
                  {
                    label: "Cloud Learning Platform",
                    description: "Learn more about cloud learning platform",
                    href: "/solutions/cloud-learning-platform",
                  },
                  {
                    label: "Solutions Catalog",
                    description: "Learn more about solutions catalog",
                    href: "/solutions/catalog",
                  },
                  {
                    label: "Data Analytics",
                    description: "Learn more about data analytics",
                    href: "/solutions/data-analytics",
                  },
                ]}
              />
            </div>

            <div
              className={`nav-item has-mega ${isPathActive("/cloud-services") ? "active" : ""}`}>
              <button
                className={`nav-link ${activeMega === "cloud" ? "open" : ""}`}
                onClick={() =>
                  setActiveMega(activeMega === "cloud" ? null : "cloud")
                }>
                Cloud Services <Arrow />
              </button>

              <MegaMenu
                title="CLOUD SERVICES"
                description="Explore our comprehensive suite of cloud services designed to scale your business."
                links={[
                  {
                    label: "Google Cloud Services",
                    description: "Learn more about google cloud services",
                    href: "/cloud-services/google-cloud",
                  },
                  {
                    label: "Cloud Consulting",
                    description: "Learn more about cloud consulting",
                    href: "/cloud-services/cloud-consulting",
                  },
                  {
                    label: "Cloud Architecture & Migration",
                    description:
                      "Learn more about cloud architecture & migration",
                    href: "/cloud-services/migration",
                  },
                  {
                    label: "Cloud Cost Optimization",
                    description: "Learn more about cloud cost optimization",
                    href: "/cloud-services/cost-optimization",
                  },
                  {
                    label: "Managed Cloud Services",
                    description: "Learn more about managed cloud services",
                    href: "/cloud-services/managed",
                  },
                  {
                    label: "Change Management",
                    description: "Learn more about change management",
                    href: "/cloud-services/change-management",
                  },
                  {
                    label: "Hybrid & Multicloud Services",
                    description:
                      "Learn more about hybrid & multicloud services",
                    href: "/cloud-services/hybrid-multicloud",
                  },
                  {
                    label: "Location-based Services",
                    description: "Learn more about location-based services",
                    href: "/cloud-services/location-based",
                  },
                ]}
              />
            </div>

            <Link
              href="/about"
              className={`nav-link ${isPathActive("/about") ? "active" : ""}`}>
              About
            </Link>
            <Link
              href="/careers"
              className={`nav-link ${isPathActive("/careers") ? "active" : ""}`}>
              Careers
            </Link>
            <Link
              href="/blog"
              className={`nav-link ${isPathActive("/blog") ? "active" : ""}`}>
              Blog
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${isPathActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </div>
          <Link href="/#whoWeAre" className="cta-btn-responsive">
            Get Started
          </Link>
        </nav>

        <Link href="/#whoWeAre" className="cta-btn">
          Get Started
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
