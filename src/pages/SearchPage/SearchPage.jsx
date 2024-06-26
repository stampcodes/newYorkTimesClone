import { FaSearch } from "react-icons/fa";
import styles from "../SearchPage/SearchPage.module.css";
import { useState } from "react";
import SearchResult from "../../components/SearchResult/SearchResult";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useSearchArticles } from "../../hooks/useSearchArticles";
import loading from "../../assets/loading.gif"
import { Helmet } from "react-helmet-async";


const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const {
    data: articles, 
    mutate,
    isLoading,
    error,
  } = useSearchArticles(query);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    mutate(search);
    setSearch("");
  };

  if (isLoading)
    return (
      <div className={styles.LoadingIcon}>
        <img src={loading} alt="loading..." />
      </div>
    );
  if (error) return <div>Error loading articles: {error.message}</div>;

  return (
    <>
    <Helmet>
    <title>The New York Times - Search</title>
    </Helmet>
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
