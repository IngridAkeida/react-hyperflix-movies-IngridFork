import { apiUrl } from "./apiData";
const apiKey = import.meta.env.VITE_MY_TOKEN;

const basicFetch = async (keyPass) => {
  try {
    const response = await fetch(`${apiUrl}${keyPass}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Fetch error: ', error.message);
    return null;
  }
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "trending",
        title: "Trending",
        items: await basicFetch(`/trending/all/week?&api_key=${apiKey}`),
      },
      {
        slug: "toprated",
        title: "Toprated",
        items: await basicFetch(`/movie/top_rated?&api_key=${apiKey}`),
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${apiKey}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${apiKey}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${apiKey}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${apiKey}`)
      },
    ];
  },
  getMovieForId: async (movieId) => {
    const info = await basicFetch(
      `/movie/${movieId}?api_key=${apiKey}&language=en-US&append_to_response=credits,videos,reviews,similar`
    );
    return info;
  },
  getSearchMovie: async (searchText) => {
    const data = await basicFetch(
      `search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=1&include_adult=false`
    );

    return data;
  },
};
