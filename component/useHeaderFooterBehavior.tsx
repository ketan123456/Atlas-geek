"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HeaderFooterLogic = () => {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementsByClassName("hero")[0] as HTMLElement | null;
    const footer = document.getElementById("siteFooter") as HTMLElement | null;
    const main = document.querySelector("main") as HTMLElement | null;
    const hero = document.querySelector(".hero-section") as HTMLElement | null;

    if (!main) return;

    const handleScroll = () => {
      if (!header || !footer) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrollPercent = (scrollTop + windowHeight) / docHeight;

      if (scrollPercent > 0.5) {
        footer.style.zIndex = "2";
        header.style.zIndex = "1";
      } else {
        header.style.zIndex = "2";
        footer.style.zIndex = "-1";
      }
    };

    const adjustMainSpacing = () => {
      if (window.innerWidth <= 767) {
        main.style.marginTop = "";
        main.style.marginBottom = "";
        return;
      }

      const heroHeight = hero?.offsetHeight || 0;
      const footerHeight = footer?.offsetHeight || 0;

      main.style.marginTop = `calc(${heroHeight}px - 2px)`;
      main.style.marginBottom = `calc(${footerHeight}px - 2px)`;
    };

    const rafAdjust = () => requestAnimationFrame(adjustMainSpacing);

    rafAdjust();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", rafAdjust);

    const images = document.images;
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("load", rafAdjust);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", rafAdjust);

      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener("load", rafAdjust);
      }
    };
  }, [pathname]); 

  return null;
};

export default HeaderFooterLogic;
