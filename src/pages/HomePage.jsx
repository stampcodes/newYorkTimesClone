import { useEffect, useState } from "react";
import MainContent from "../components/MainContent/MainContent";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = import.meta.env.VITE_NYT_API_KEY;
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
      );
      const data = await response.json();
      setArticles(data.results);
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Navbar />
      <MainContent articles={articles} />
      <Footer />
    </>
  );
};

export default HomePage;
