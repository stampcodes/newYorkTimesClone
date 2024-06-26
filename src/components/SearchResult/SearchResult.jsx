import styles from "../../components/SearchResult/SearchResult.module.css";

const SearchResult = ({ article }) => {
  const baseUrl = "https://www.nytimes.com/";

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>{article.headline.main}</h1>
          <p>{article.abstract}</p>
        </div>
        <a href={article.web_url} target="_blank" rel="noopener noreferrer">
          <img
            className={styles.img}
            src={`${baseUrl}${article.multimedia[0]?.url}`}
            alt="article link"
          />
        </a>
      </div>
    </>
  );
};

export default SearchResult;
