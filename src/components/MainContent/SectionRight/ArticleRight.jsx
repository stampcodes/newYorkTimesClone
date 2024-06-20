import styles from "../../../styles/MainContent.module.css";

const ArticleRight = ({article}) => {
  return (
    <>
    <div className={styles.sectionRight}>
    <a href={article.url} target="_blank" rel="noopener noreferrer">
        <img className={styles.imgSectionRight} src={article.multimedia[0]?.url} alt={article.multimedia[0]?.caption} />{" "}
        </a>
        <span>{article.byline}</span>
        <section className={styles.textRight} >
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
        </section>
      </div>
    </>
  )
}

export default ArticleRight