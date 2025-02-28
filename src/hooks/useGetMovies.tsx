import { IMovieDetails, IMovieDiscovery } from "@/interfaces/Movies";
import api from "@/services/api";
import { useEffect, useState } from "react";

export default function useGetMovies(
  queryParams?: string | undefined,
  filterByGenre?: number | number[] | undefined,
) {
  const [movies, setMovies] = useState<IMovieDiscovery[] | IMovieDetails[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchParams =
    queryParams !== "" && queryParams && encodeURIComponent(queryParams);

  async function getMovies() {
    try {
      const { data } = await api.get(
        `/discover/movie?include_adult=false&include_video=false&language=pt-Br&page=1&region=pt-Br&sort_by=popularity.desc`,
      );

      setMovies(data.results);
      setTotalPages(data.total_pages);
      setCurrentPage(data.page);
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
        setTotalPages(data.total_pages);
        setCurrentPage(data.page);

        return;
      }

      setMovies(result);
      setTotalPages(data.total_pages);
      setCurrentPage(data.page);
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
    setMovies,
    setTotalPages,
    setCurrentPage,
    currentPage,
  };
}
