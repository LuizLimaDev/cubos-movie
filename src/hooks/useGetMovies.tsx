import { IMovieDetails, IMovieDiscovery } from "@/interfaces/Movies";
import api from "@/services/api";
import { useEffect, useState } from "react";

export default function useGetMovies(
  queryParams?: string | undefined,
  filterByGenre?: number | number[] | undefined,
) {
  const [movies, setMovies] = useState<IMovieDiscovery[] | IMovieDetails[]>([]);
  const [totalPages, setTotalPAges] = useState<number>(1);
  const searchParams =
    queryParams !== "" && queryParams && encodeURIComponent(queryParams);

  async function getMovies(filterByGenre?: number | number[] | undefined) {
    const url = filterByGenre
      ? `/discover/movie?include_adult=false&include_video=false&language=pt-Br&page=1&region=pt-Br&sort_by=popularity.desc&with_genres=${filterByGenre}`
      : `/discover/movie?include_adult=false&include_video=false&language=pt-Br&page=1&region=pt-Br&sort_by=popularity.desc`;

    try {
      const { data } = await api.get(url);

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchMovie(
    params: string | false | undefined,
    filterByGenre?: number | number[] | undefined,
  ) {
    if (params === undefined) return;

    try {
      const { data } = await api.get(
        `/search/movie?query=${params}&include_adult=false&language=pt-Br&page=1`,
      );

      const result: IMovieDetails[] = data.results;

      if (filterByGenre) {
        const genresToFilter = Array.isArray(filterByGenre)
          ? filterByGenre
          : [filterByGenre];

        const filteredResults = result.filter((movie) => {
          return movie.genres.some((genreId) =>
            genresToFilter.includes(Number(genreId)),
          );
        });

        setMovies(filteredResults);
        setTotalPAges(data.total_pages);
        return;
      }

      setMovies(result);
      setTotalPAges(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (searchParams || filterByGenre || (searchParams && filterByGenre)) {
      searchMovie(searchParams, filterByGenre);
      return;
    }
    getMovies();
  }, [searchParams, filterByGenre]);

  return {
    movies,
    searchMovie,
    totalPages,
  };
}
