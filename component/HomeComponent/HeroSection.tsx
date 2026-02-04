"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchData } from "../searchData";

interface SearchItem {
  title: string;
  keywords: string[];
  route: string;
  sectionId?: string;
}

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const router = useRouter();

  const handleSearch = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter((item) =>
      item.keywords.some((key) =>
        key.toLowerCase().includes(value.toLowerCase()),
      ),
    );

    setResults(filtered);
  };

  const handleSelect = (item: SearchItem) => {
    setQuery("");
    setResults([]);

    // Navigate
    router.push(item.route);

    // Scroll after route change
    if (item.sectionId) {
      setTimeout(() => {
        const el = document.getElementById(item.sectionId!);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <section className="hero hero-section" id="siteHeader">
      <div className="hero-container">
        <span className="hero-badge">Next Gen Cloud Solutions</span>

        <h1 className="hero-title">
          About <span className="hero-title-gradient">AtlasGeek</span>
        </h1>

        <p className="hero-subtitle">
          Empowering businesses with cloud, AI, and digital transformation.
        </p>

        {/* SEARCH */}
        <div className="hero-search" style={{ position: "relative" }}>
          <span className="search-icon">🔍</span>

          <input
            type="text"
            className="search-input"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="What can we help you find?"
          />

          {results.length > 0 && (
            <ul className="search-suggestions">
              {results.map((item, index) => (
                <li key={index} onClick={() => handleSelect(item)}>
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hero-actions">
          <a href="#whoWeAre" className="btn-primary">
            Get Started →
          </a>
          <a href="/about" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
