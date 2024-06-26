import { useMutation } from "react-query";
import axios from "axios";

const fetchSearchArticles = async (query) => {
  const apiKey = import.meta.env.VITE_NYT_API_KEY;

  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
      {
        params: {
          q: query,
          "api-key": apiKey,
        },
      }
    );
    return response.data.response.docs;
  } catch (error) {
    throw new Error("Error fetching search articles");
  }
};

export const useSearchArticles = (options = {}) => {
  return useMutation((query) => fetchSearchArticles(query), options);
};
