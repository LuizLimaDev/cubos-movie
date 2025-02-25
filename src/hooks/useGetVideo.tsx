import api from "@/services/api";
import { useEffect, useState } from "react";

interface Ivideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export default function useGetVideo(id: string | undefined) {
  const [video, setVideo] = useState<Ivideo>();

  async function GetVideo(id: string | undefined) {
    try {
      const { data } = await api.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}?language=pt-BR
`,
      );

      setVideo(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetVideo(id);
  }, [id]);

  return {
    video,
  };
}
