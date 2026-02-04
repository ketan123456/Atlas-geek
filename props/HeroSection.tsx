import clsx from "clsx";
import "./HeroSection.css";
import Link from "next/link";
import { Breadcrumb } from "../component/icon/icon";
type ButtonConfig = {
  label: string;
  onClick?: () => void;
};

type HeroSectionProps = {
  breadcrumb: string;
  title: string;
  subtitle: string;
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
  containerClass?: string;
};

export default function HeroSection({
  breadcrumb,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  containerClass,
}: HeroSectionProps) {
  return (
    <section
      className={clsx(
        "hero-base min-h-[70vh] flex items-center text-white ",
        containerClass,
      )}>
      <div className="hero-inner max-w-7xl px-6 md:px-12 lg:px-24 w-full">
        {/* Breadcrumb */}
        <div className="hero-breadcrumb"><Breadcrumb/> &nbsp;{breadcrumb}</div>

        {/* Title */}
        <h1 className="hero-title">{title}</h1>

        {/* Subtitle */}
        <p className="hero-subtitle">{subtitle}</p>

        {/* Buttons */}
        <div className="hero-actions">
          <Link href="/contact" className="hero-primary-btn">{primaryButton.label}</Link>

          {secondaryButton && (
            <Link href="#" className="hero-secondary-btn">
              {secondaryButton.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
