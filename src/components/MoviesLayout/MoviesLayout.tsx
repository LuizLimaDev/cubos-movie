import usePaginationData from "@/hooks/usePaginationData";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import MoviesDisplay from "../ui/MoviesDisplay/MoviesDisplay";
import PaginationControl from "../ui/PaginationControl/PaginationControl";

export default function MoviesLayout() {
  const [queryParams, setQueryParams] = useState<string | undefined>(undefined);
  const [genreFilter, setGenreFilter] = useState<
    number | number[] | undefined
  >();

  const { currentMovies, currentPage, setCurrentPage, pages } =
    usePaginationData(queryParams, genreFilter);
  const lastPage = pages.length;

  return (
    <section className="colorTheme">
      <NavBar setQueryParams={setQueryParams} setGenreFilter={setGenreFilter} />
      <MoviesDisplay currentMovies={currentMovies} />

      <PaginationControl
        currentPage={currentPage}
        pages={pages}
        lastPage={lastPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
