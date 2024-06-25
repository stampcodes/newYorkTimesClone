import { FaSearch } from "react-icons/fa";
import styles from "../styles/SearchPage.module.css";
import { useState } from "react";
import SearchResult from "../components/SearchResult/SearchResult";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useSearchArticles } from "../hooks/useSearchArticles";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("sports");

  const {
    data: articles,
    refetch,
    isLoading,
    error,
  } = useSearchArticles(query);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    refetch();
    setSearch("");
  };

  if (isLoading)
    return (
      <div className={styles.LoadingIcon}>
        <img src="/newYorkTimesClone/loading.gif" alt="loading..." />
      </div>
    );
  if (error) return <div>Error loading articles: {error.message}</div>;

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
        {articles &&
          articles.map((article, index) => (
            <SearchResult key={index} article={article} />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
