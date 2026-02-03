"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "./icon/icon";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (basePath: string) =>
    pathname === basePath || pathname.startsWith(`${basePath}/`);

  return (
    <header className="header" id="siteHeader">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image src="/Logo.jpeg" alt="Atlas Geek" width={100} height={70} />
        </Link>

        <nav className="nav">
          {/* Solutions */}
          <div
            className={`nav-item has-mega ${isActive("/solutions") ? "active" : ""}`}>
            <button className="nav-link">
              Solutions <Arrow />
            </button>

            <MegaMenu
              title="SOLUTIONS"
              description="Explore our comprehensive suite of solutions designed to scale your business."
              links={[
                {
                  label: "AI",
                  description: "Learn more about ai",
                  href: "/solutions/ai",
                },
                {
                  label: "Cloud Security",
                  description: "Learn more about cloud security",
                  href: "/solutions/cloud-security",
                },
                {
                  label: "Infrastructure Modernization",
                  description: "Learn more about infrastructure modernization",
                  href: "/solutions/infrastructure-modernization",
                },
                {
                  label: "Productivity & Collaboration",
                  description: "Learn more about productivity & collaboration",
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

          {/* Cloud Services */}
          <div
            className={`nav-item has-mega ${isActive("/cloud-services") ? "active" : ""}`}>
            <button className="nav-link">
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
                  href: "/cloud-services/consulting",
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
                  description: "Learn more about hybrid & multicloud services",
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
            className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>
          <Link
            href="/careers"
            className={`nav-link ${isActive("/careers") ? "active" : ""}`}>
            Careers
          </Link>
          <Link
            href="/blog"
            className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
            Blog
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            Contact
          </Link>
        </nav>

        <Link href="/" className="cta-btn">
          Get Started
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}>
          ☰
        </button>
      </div>

      <div className={`mobile-menu ${isMobileOpen ? "open" : ""}`}>
        <Link
          href="/solutions"
          className={isActive("/solutions") ? "active" : ""}>
          Solutions
        </Link>
        <Link
          href="/cloud-services"
          className={isActive("/cloud-services") ? "active" : ""}>
          Cloud Services
        </Link>
        <Link href="/about" className={isActive("/about") ? "active" : ""}>
          About
        </Link>
        <Link href="/careers" className={isActive("/careers") ? "active" : ""}>
          Careers
        </Link>
        <Link href="/blog" className={isActive("/blog") ? "active" : ""}>
          Blog
        </Link>
        <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
          Contact
        </Link>
        <Link href="/" className="mobile-cta">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
