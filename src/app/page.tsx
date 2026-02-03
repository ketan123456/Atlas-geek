import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "../../component/HomeComponent/HeroSection";
import WhoWeAreSection from "../../component/HomeComponent/WhoWeAreSection";
import SolutionsSection from "../../component/HomeComponent/SolutionsSection";
import PartnerSection from "../../component/HomeComponent/PartnerSection";
import ValuesSection from "../../component/HomeComponent/ValuesSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <WhoWeAreSection />
        <SolutionsSection />
        <PartnerSection />
        <ValuesSection />
      </main>
    </>
  );
}
