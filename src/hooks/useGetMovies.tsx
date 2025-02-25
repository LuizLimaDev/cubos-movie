import { IMovie } from "@/interfaces/Movies";
import api from "@/services/api";
import { useEffect, useState } from "react";

export default function useGetMovies() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  async function getMovies() {
    try {
      const { data } = await api.get(
        "/discover/movie?include_adult=false&include_video=false&language=pt-Br&page=1&region=pt-Br&sort_by=popularity.desc",
      );

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return {
    movies,
  };
}
