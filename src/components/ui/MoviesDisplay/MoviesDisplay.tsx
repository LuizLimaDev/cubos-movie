import { IMovieDetails, IMovieDiscovery } from "@/interfaces/Movies";
import { Link } from "react-router";

interface moviesDisplayProps {
  currentMovies: IMovieDiscovery[] | IMovieDetails[];
}

export default function MoviesDisplay({ currentMovies }: moviesDisplayProps) {
  return (
    <div className="rounded bg-mauveDark-3 p-4">
      <ul className="flex w-full flex-wrap items-center justify-around gap-4">
        {currentMovies.map((movie) => (
          <li key={movie.id} className="relative">
            <Link to={`/moviedetails/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`poster do filme ${movie.title}`}
                className="min-h-[281px] w-[44.2vw] max-w-[235px] desktop:min-h-[355px] desktop:min-w-[235px]"
              />
              <p className="absolute bottom-4 left-4 font-montserrat text-sm font-bold uppercase text-mauveDark-12 shadow-md hover:bottom-8">
                {movie.title}
              </p>

              {/* <div className="absolute bottom-4 w-[47.9%]">
              {movie.genre_ids.map((id) => {
                return (
                  <p className="font-montserrat text-xs">{translateGenre(id)} </p>
                );
              })}
            </div> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
