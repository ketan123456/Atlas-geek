import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../../component/Header";
import Footer from "../../component/Footer";
import HeaderFooterLogic from "../../component/useHeaderFooterBehavior";
import Cursor from "../../component/Cursor";

/* ================= Fonts ================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ================= SEO Metadata ================= */

export const metadata: Metadata = {
  title: {
    default: "Atlas Geek",
    template: "%s ",
  },
  description:
    "Atlas Geek is a modern tech platform sharing high-quality content on web development, Next.js, React, and frontend engineering.",
  keywords: [
    "Atlas Geek",
    "Web Development",
    "Next.js",
    "React",
    "Frontend Developer",
    "JavaScript",
    "UI UX",
  ],
  authors: [{ name: "Atlas Geek" }],
  creator: "Atlas Geek",
  publisher: "Atlas Geek",

  metadataBase: new URL("https://www.atlasgeek.com"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Atlas Geek",
    description:
      "Atlas Geek is a modern tech platform sharing high-quality content on web development, Next.js, React, and frontend engineering.",
    url: "https://www.atlasgeek.com",
    siteName: "Atlas Geek",
    images: [
      {
        url: "https://www.atlasgeek.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atlas Geek",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Atlas Geek",
    description:
      "Atlas Geek is a modern tech platform sharing high-quality content on web development, Next.js, React, and frontend engineering.",
    images: ["https://www.atlasgeek.com/og-image.jpg"],
    creator: "@atlasgeek", // optional
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

/* ================= Root Layout ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning>
        <Header />

        {children}

        <Footer />

        <HeaderFooterLogic />

        <Cursor />
      </body>
    </html>
  );
}
