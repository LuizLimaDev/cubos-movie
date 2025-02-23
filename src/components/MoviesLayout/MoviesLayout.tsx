import usePaginationData from "@/hooks/usePaginationData";
import MoviesDisplay from "../ui/MoviesDisplay/MoviesDisplay";
import PaginationControl from "../ui/PaginationControl/PaginationControl";

export default function MoviesLayout() {
  const { currentMovies, currentPage, setCurrentPage, pages } =
    usePaginationData();
  const lastPage = pages.length;

  console.log("filmes: ", currentMovies);
  console.log(
    "página atual: ",
    currentPage,
    "total movies: ",
    pages,
    "ultima pagina: ",
    lastPage,
  );

  return (
    <section>
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
