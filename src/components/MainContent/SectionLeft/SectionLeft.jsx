import styles from "../../../components/MainContent/MainContent.module.css";
import ArticleLeft from "./ArticleLeft";

const SectionLeft = ({ articles }) => {
  return (
    <>
      <div className={styles.articlesLeft}>
        {articles.map((article, index) => (
          <ArticleLeft key={index} article={article} />
        ))}
      </div>
    </>
  );
};

export default SectionLeft;
