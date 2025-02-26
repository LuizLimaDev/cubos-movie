import { IMovieDetails, IMovieDiscovery } from "@/interfaces/Movies";
import api from "@/services/api";
import { useEffect, useState } from "react";

export default function useGetMovies(queryParams?: string | undefined) {
  const [movies, setMovies] = useState<IMovieDiscovery[] | IMovieDetails[]>([]);
  const [totalPages, setTotalPAges] = useState<number>(1);
  const searchParams = queryParams && encodeURIComponent(queryParams);

  async function getMovies() {
    try {
      const { data } = await api.get(
        "/discover/movie?include_adult=false&include_video=false&language=pt-Br&page=1&region=pt-Br&sort_by=popularity.desc",
      );

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchMovie(params: string | undefined) {
    if (params === undefined) return;

    try {
      const { data } = await api.get(
        `/search/movie?query=${params}&include_adult=false&language=pt-Br&page=1
`,
      );

      setMovies(data.results);
      setTotalPAges(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (searchParams) {
      searchMovie(searchParams);
      return;
    }
    getMovies();
  }, [searchParams]);

  return {
    movies,
    searchMovie,
    totalPages,
  };
}
