import AboutHero from "../../../component/AboutComponent/AboutHero";
import LeadershipSection from "../../../component/AboutComponent/LeadershipSection";
import MissionVisionSection from "../../../component/AboutComponent/MissionVisionSection";
import StatsSection from "../../../component/AboutComponent/StatsSection";
import StorySection from "../../../component/AboutComponent/StorySection";

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