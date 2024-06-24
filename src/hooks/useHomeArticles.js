import { useQuery } from "react-query";
import axios from "axios";

const fetchHomeArticles = async () => {
  const apiKey = import.meta.env.VITE_NYT_API_KEY;
  const { data } = await axios.get(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
  );
  return data.results;
};

export const useHomeArticles = (options = {}) => {
  return useQuery("homeArticles", fetchHomeArticles, options);
};