import arrowPages from "@/assets/icons/arrow-pages.svg";
import { IMovieDetails, IMovieDiscovery } from "@/interfaces/Movies";
import api from "@/services/api";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface paginationProps {
  currentPage: number;
  pages: number[];
  lastPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setLoadedMovies: Dispatch<
    SetStateAction<IMovieDiscovery[] | IMovieDetails[] | undefined>
  >;
}

export default function PaginationControl({
  currentPage,
  pages,
  setCurrentPage,
  lastPage,
  setLoadedMovies,
}: paginationProps) {
  const [pageClicked, setPageClicked] = useState<number>();

  function onClick(page: number) {
    setPageClicked(page);
  }

  useEffect(() => {
    async function changePage(pageNumber: number | undefined) {
      if (pageNumber === undefined) return;

      const findPageInTmdb = Math.ceil((pageNumber * 10) / 20);

      try {
        const { data } = await api.get(
          `/discover/movie?include_adult=false&include_video=false&language=pt-Br&page=1&region=pt-Br&sort_by=popularity.desc&page=${findPageInTmdb}`,
        );

        setLoadedMovies(data.result);
      } catch (error) {
        console.log(error);
      }
    }
    changePage(pageClicked);
  }, [pageClicked, setLoadedMovies]);

  return (
    <div className="flex-center colorTheme gap-3 p-6">
      <button
        className={`${currentPage === 1 ? "bg-mauveDark-4" : "bg-purpleDark-9"} flex-center h-11 w-12 text-mauveDark-12`}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={arrowPages} alt="voltar página" className="rotate-180" />
      </button>
      {pages
        .map((page) => {
          return (
            <button
              key={page}
              className={`${page === currentPage ? "bg-purpleDark-6" : "bg-purpleDark-9"} h-11 w-12 text-mauveDark-12`}
              onClick={() => onClick(page)}
            >
              {page === 5 ? "..." : page}
            </button>
          );
        })
        .slice(0, 5)}

      <button
        className={`${currentPage === lastPage ? "bg-mauveDark-4" : "bg-purpleDark-9"} flex-center h-11 w-12 text-mauveDark-12`}
        onClick={() =>
          currentPage < pages.length && setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === lastPage}
      >
        <img src={arrowPages} alt="avançar página" />
      </button>
    </div>
  );
}
