import styles from "../../../styles/MainContent.module.css";

const ArticleLeft = ({ article }) => {




  return (
    <>
      <div className={styles.sectionLeft}>
        <section className={styles.textLeft}>
          <h2>{article.title}</h2>
          <p>{article.abstract}</p>
        </section>
        <section>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
        <img className={styles.imgSectionLeft} src={article.multimedia[0]?.url} alt={article.multimedia[0]?.caption} />
        </a>
        <span>{article.byline}</span>
        </section>
      </div>
    </>
  );
};

export default ArticleLeft;
