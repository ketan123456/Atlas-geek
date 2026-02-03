import FeaturedArticle from "../../../component/BlogComponent/FeaturedArticle";
import ArticlesSection from "../../../component/BlogComponent/ArticlesSection";
import InsightsHero from "../../../component/BlogComponent/InsightsPage";

const BlogPage = () => {
  return (
    <>
      <InsightsHero />
      <main>
        <FeaturedArticle />
        <ArticlesSection />
      </main>
    </>
  );
};

export default BlogPage;
