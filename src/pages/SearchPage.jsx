import { FaSearch } from "react-icons/fa";
import styles from "../styles/SearchPage.module.css";
import { useEffect, useState } from "react";
import SearchResult from "../components/SearchResult/SearchResult";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const SearchPage = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("election 2024");

  useEffect(() => {
    getArticles();
  }, [query]);

  const getArticles = async () => {
    const apiKey = import.meta.env.VITE_NYT_API_KEY;
    const res = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`
    );
    const data = await res.json();
    setArticles(data.response.docs);
  };
  console.log(articles);
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <Navbar />
      <form className={styles.form} onSubmit={getSearch}>
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search The New York Times"
        />

        <button type="submit">
          <FaSearch />
        </button>
      </form>
      <div className={styles.container}>
        {articles.map((article, index) => (
          <SearchResult key={index} article={article} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
