import styles from "../HomePage/HomePage.module.css";
import MainContent from "../../components/MainContent/MainContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useHomeArticles } from "../../hooks/useHomeArticles";
import loading from "../../assets/loading.gif"
import { Helmet } from "react-helmet";

const HomePage = () => {
  const { data: articles, isLoading, error } = useHomeArticles();

  if (isLoading)
    return (
      <div className={styles.LoadingIcon}>
        <img src={loading} alt="loading..." />
      </div>
    );
  if (error) return <div>Error loading articles</div>;

  return (
    <>
    <Helmet>
    <title>The New York Times - Home</title>
    </Helmet>
      <Navbar />
      <MainContent articles={articles} />
      <Footer />
    </>
  );
};

export default HomePage;
