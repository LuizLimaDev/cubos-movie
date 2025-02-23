import { useState } from "react";
import useGetMovies from "./useGetMovies";
import usePaginationPages from "./usePaginationPages";

export default function usePaginationData() {
  const { movies } = useGetMovies();

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  const lastMoviesIndex = currentPage * moviesPerPage; // 10
  const firstMoviesIndex = lastMoviesIndex - moviesPerPage; // 0
  const currentMovies = movies.slice(firstMoviesIndex, lastMoviesIndex);
  const totalMovies = movies.length;

  const { pages } = usePaginationPages({ totalMovies, moviesPerPage });

  return { currentMovies, currentPage, setCurrentPage, pages, totalMovies };
}
