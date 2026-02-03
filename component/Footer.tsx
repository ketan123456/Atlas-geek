
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
                <Link href="#">Google Cloud Services</Link>
              </li>
              <li>
                <Link href="#">Cloud Consulting</Link>
              </li>
              <li>
                <Link href="#">Cloud Architecture & Migration</Link>
              </li>
              <li>
                <Link href="#">Cloud Cost Optimization</Link>
              </li>
              <li>
                <Link href="#">Managed Cloud Services</Link>
              </li>
              <li>
                <Link href="#">Change Management</Link>
              </li>
              <li>
                <Link href="#">Hybrid & Multicloud Services</Link>
              </li>
              <li>
                <Link href="#">Location-based Services</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Solutions</h4>
            <ul className="footer-list">
              <li>
                <Link href="#">AI</Link>
              </li>
              <li>
                <Link href="#">Cloud Security</Link>
              </li>
              <li>
                <Link href="#">Infrastructure Modernization</Link>
              </li>
              <li>
                <Link href="#">Productivity & Collaboration</Link>
              </li>
              <li>
                <Link href="#">App Modernization</Link>
              </li>
              <li>
                <Link href="#">Data Analytics</Link>
              </li>
              <li>
                <Link href="#">Cloud Learning Platform</Link>
              </li>
              <li>
                <Link href="#">Solutions Catalog</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-list">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
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
