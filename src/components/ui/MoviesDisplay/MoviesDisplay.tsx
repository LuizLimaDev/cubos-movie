import { Movie } from "@/interfaces/Movies";

interface moviesDisplayProps {
  currentMovies: Movie[];
}

export default function MoviesDisplay({ currentMovies }: moviesDisplayProps) {
  return (
    <div className="rounded bg-mauveDark-3 p-4">
      <ul className="flex w-full flex-wrap items-center justify-between gap-4">
        {currentMovies.map((movie) => (
          <li key={movie.id} className="relative h-[50%] w-[47.9%]">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={`poster do filme ${movie.title}`}
            />
            <p className="absolute bottom-4 left-4 font-montserrat text-sm font-bold uppercase text-mauveDark-12 shadow-md">
              {movie.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
