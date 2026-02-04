import FeaturedArticle from "../../../component/BlogComponent/FeaturedArticle";
import ArticlesSection from "../../../component/BlogComponent/ArticlesSection";
import InsightsHero from "../../../component/BlogComponent/InsightsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Geek-Blog",
  description: "Latest articles, tutorials, and insights from Atlas Geek.",
  alternates: {
    canonical: "/blog",
  },
};
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
