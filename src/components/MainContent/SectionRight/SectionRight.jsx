import styles from "../../../components/MainContent/MainContent.module.css";
import ArticleRight from "./ArticleRight";

const SectionRight = ({articles}) => {
  return (
    <>
      <div className={styles.articlesRight}>
        {articles.map((article, index) => (
          <ArticleRight key={index} article={article}/>
        ))}
        
      </div>
    </>
  );
};

export default SectionRight;
