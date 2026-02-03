type ArticleCardProps = {
  title: string;
  description: string;
  date: string;
  category: string;
  categoryClass: string;
  image?: boolean;
};

const ArticleCard = ({
  title,
  description,
  date,
  category,
  categoryClass,
  image = false,
}: ArticleCardProps) => {
  return (
    <article className={`article-card ${image ? "image" : ""}`}>
      <img src="blog_card.jpeg" alt="" />
      <span className={`category ${categoryClass}`}>{category}</span>
      <span className="date">{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">Read Article →</a>
    </article>
  );
};

export default ArticleCard;
