import styles from "../styles/HomePage.module.css";
import MainContent from "../components/MainContent/MainContent";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useHomeArticles } from "../hooks/useHomeArticles";

const HomePage = () => {
  const { data: articles, isLoading, error } = useHomeArticles();

  if (isLoading)
    return (
      <div className={styles.LoadingIcon}>
        <img src="/loading.gif" alt="loading..." />
      </div>
    );
  if (error) return <div>Error loading articles</div>;

  return (
    <>
      <Navbar />
      <MainContent articles={articles} />
      <Footer />
    </>
  );
};

export default HomePage;
