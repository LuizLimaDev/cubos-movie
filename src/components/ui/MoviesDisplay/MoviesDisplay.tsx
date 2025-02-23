import { Movie } from "@/interfaces/Movies";

interface moviesDisplayProps {
  currentMovies: Movie[];
}

interface Genre {
  id: number;
  name: string;
}

const genres: Genre[] = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

console.log("generos: ", genres);

// function genreFinder(id: number) {
//   const genre = genres.find((genre) => genre.id === id);
//   return genre!.name;
// }

export default function MoviesDisplay({ currentMovies }: moviesDisplayProps) {
  return (
    <div className="rounded bg-mauveDark-3 p-4">
      <ul className="flex w-full flex-wrap items-center justify-around gap-4">
        {currentMovies.map((movie) => (
          <li key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={`poster do filme ${movie.title}`}
              className="desktop:min-h-[355px] desktop:min-w-[235px] min-h-[281px] w-[44.2vw] max-w-[235px]"
            />
            <p className="absolute bottom-4 left-4 font-montserrat text-sm font-bold uppercase text-mauveDark-12 shadow-md hover:bottom-8">
              {movie.title}
            </p>

            {/* <div className="absolute bottom-4 w-[47.9%]">
              {movie.genre_ids.map((id) => {
                return (
                  <p className="font-montserrat text-xs">{genreFinder(id)} </p>
                );
              })}
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
