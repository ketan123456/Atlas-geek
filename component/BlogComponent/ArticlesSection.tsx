"use client";

import { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";
import { articlesData } from "./articlesData";
import { throttle } from "../../utils/throttle";

const ARTICLES_PER_LOAD = 6;

const ArticlesSection = () => {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_LOAD);

  const visibleArticles = useMemo(
    () => articlesData.slice(0, visibleCount),
    [visibleCount],
  );

  const loadMore = throttle(() => {
    setVisibleCount((prev) =>
      Math.min(prev + ARTICLES_PER_LOAD, articlesData.length),
    );
  }, 800);

  return (
    <section className="articles">
      <div className="articles-grid">
        {visibleArticles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            date={article.date}
            category={article.category}
            categoryClass={article.categoryClass}
            image={article.image}
          />
        ))}
      </div>

      {visibleCount < articlesData.length && (
        <div className="load-more">
          <button onClick={loadMore}>Load More Articles</button>
        </div>
      )}
    </section>
  );
};

export default ArticlesSection;
