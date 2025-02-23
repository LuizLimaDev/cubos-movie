import arrowPages from "@/assets/icons/arrow-pages.svg";
import usePaginationData from "@/hooks/usePaginationData";

export default function MoviesLayout() {
  const { currentMovies, currentPage, pages } = usePaginationData();

  console.log("filmes: ", currentMovies);
  console.log(currentPage);

  return (
    <section>
      <div className="rounded bg-mauveDark-3 p-4">
        <ul className="flex w-full flex-wrap items-center justify-between gap-4">
          {currentMovies.map((movie) => (
            <li key={movie.id} className="relative h-[50%] w-[47.9%]">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`poster do filme ${movie.title}`}
              />
              <p className="absolute bottom-4 left-4 font-montserrat text-sm font-bold uppercase text-mauveDark-12">
                {movie.title}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-center m-6 gap-3">
        <button
          className={`${currentPage === 1 && "bg-mauveDark-4"} flex-center h-11 w-12 bg-purpleDark-9 text-mauveDark-12`}
        >
          <img src={arrowPages} alt="voltar página" className="rotate-180" />
        </button>

        {pages.map((page) => {
          return (
            <button
              key={page}
              className={`${page === 1 && "bg-mauveDark-4"} h-11 w-12 bg-purpleDark-9 text-mauveDark-12`}
            >
              {page}
            </button>
          );
        })}

        <button className="flex-center h-11 w-12 bg-purpleDark-9 text-mauveDark-12">
          <img src={arrowPages} alt="avançar página" />
        </button>
      </div>
    </section>
  );
}
