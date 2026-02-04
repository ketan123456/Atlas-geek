import AboutHero from "../../../component/AboutComponent/AboutHero";
import LeadershipSection from "../../../component/AboutComponent/LeadershipSection";
import MissionVisionSection from "../../../component/AboutComponent/MissionVisionSection";
import StatsSection from "../../../component/AboutComponent/StatsSection";
import StorySection from "../../../component/AboutComponent/StorySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Geek-About",
  description: "Latest articles, tutorials, and insights from Atlas Geek.",
  alternates: {
    canonical: "/about",
  },
};
const blogPage = () => {
  return (
    <>
      <AboutHero />
      <main>
        <StatsSection />
        <StorySection />
        <MissionVisionSection />
        <LeadershipSection />
      </main>
    </>
  );
}

export default blogPage