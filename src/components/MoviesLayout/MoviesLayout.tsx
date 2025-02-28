import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import usePaginationData from "@/hooks/usePaginationData";
import { IMovieDetails, IMovieDiscovery } from "@/interfaces/Movies";
import api from "@/services/api";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import MoviesDisplay from "../ui/MoviesDisplay/MoviesDisplay";

export default function MoviesLayout() {
  const [queryParams, setQueryParams] = useState<string | undefined>(undefined);
  const [genreFilter, setGenreFilter] = useState<
    number | number[] | undefined
  >();

  const { currentMovies, currentPage } = usePaginationData(
    queryParams,
    genreFilter,
  );
  const [loadedMovies, setLoadedMovies] = useState<
    IMovieDiscovery[] | IMovieDetails[] | undefined
  >(undefined);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function changePage(pageNumber: number | undefined) {
      if (pageNumber === undefined) return;

      const loadNewPageFromApi = Number.isInteger((pageNumber * 10) / 20);
      const findPageInTmdb = Math.ceil((pageNumber * 10) / 20);

      try {
        const { data } = await api.get(
          `/discover/movie?include_adult=false&include_video=false&language=pt-Br&page=1&region=pt-Br&sort_by=popularity.desc&page=${findPageInTmdb}`,
        );

        const filterMoviesToPage = !loadNewPageFromApi
          ? data.results.slice(1, 9)
          : data.results.slice(10, 20);

        setLoadedMovies(filterMoviesToPage);
      } catch (error) {
        console.log(error);
      }
    }
    changePage(page);
  }, [page, loadedMovies, currentPage]);

  return (
    <section className="colorTheme dark:bg-[url('./assets/background.png')] desktop:px-[22px]">
      <NavBar setQueryParams={setQueryParams} setGenreFilter={setGenreFilter} />
      <MoviesDisplay
        currentMovies={currentMovies}
        loadedMovies={loadedMovies}
      />

      <div className="flex-center">
        <PaginationRoot
          count={100}
          pageSize={1}
          defaultPage={1}
          page={page}
          onPageChange={(e) => setPage(e.page)}
          size={"xs"}
        >
          <PaginationPrevTrigger
            className={`${page === 1 ? "bg-mauveDark-10" : "bg-purpleDark-9"}`}
          />
          <PaginationItems className="mx-1 my-4 bg-purple-9" />
          <PaginationNextTrigger
            className={`${page === 100 ? "bg-mauveDark-10" : "bg-purpleDark-9"}`}
          />
        </PaginationRoot>
      </div>
    </section>
  );
}
