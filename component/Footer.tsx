
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from "./icon/icon";

const Footer = () => {
  

  return (
    <footer className="site-footer" id="siteFooter">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4 className="footer-title">Cloud Services</h4>
            <ul className="footer-list">
              <li>
                <Link href="/cloud-services/google-cloud">
                  Google Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/cloud-services/cloud-consulting">
                  Cloud Consulting
                </Link>
              </li>
              <li>
                <Link href="/cloud-services/migration">
                  Cloud Architecture & Migration
                </Link>
              </li>
              <li>
                <Link href="/cloud-services/cost-optimization">
                  Cloud Cost Optimization
                </Link>
              </li>
              <li>
                <Link href="/cloud-services/managed">
                  Managed Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/cloud-services/change-management">
                  Change Management
                </Link>
              </li>
              <li>
                <Link href="/cloud-services/hybrid-multicloud">
                  Hybrid & Multicloud Services
                </Link>
              </li>
              <li>
                <Link href="/cloud-services/location-based">
                  Location-based Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Solutions</h4>
            <ul className="footer-list">
              <li>
                <Link href="/solutions/ai">AI</Link>
              </li>
              <li>
                <Link href="/solutions/cloud-security">Cloud Security</Link>
              </li>
              <li>
                <Link href="/solutions/infrastructure">
                  Infrastructure Modernization
                </Link>
              </li>
              <li>
                <Link href="/solutions/productivity-collaboration">
                  Productivity & Collaboration
                </Link>
              </li>
              <li>
                <Link href="/solutions/app-modernization">
                  App Modernization
                </Link>
              </li>
              <li>
                <Link href="/solutions/data-analytics">Data Analytics</Link>
              </li>
              <li>
                <Link href="/solutions/cloud-learning-platform">
                  Cloud Learning Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions/catalog">Solutions Catalog</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-list">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-logo">
            <Link href="/">
              <Image
                src="/Logo.jpeg"
                alt="AtlasGeek Logo"
                width={80}
                height={32}
              />
            </Link>
          </div>

          <p className="footer-copy">© 2026 AtlasGeek. All rights reserved.</p>

          <div className="footer-socials">
            <a href="#" aria-label="Twitter">
              <TwitterIcon />
            </a>

            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>

            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>

            <a href="#" aria-label="YouTube">
              <YouTubeIcon />
            </a>

            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
