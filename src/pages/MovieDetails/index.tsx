import CircularProgress from "@/components/ui/CircularProgress/CircularProgress";
import useGetVideo from "@/hooks/useGetVideo";
import { IMovieDetails } from "@/interfaces/Movies";
import api from "@/services/api";
import { formatarData } from "@/utils/formatDate";
import formatMoney from "@/utils/formatMoney";
import formatTimeDuration from "@/utils/formatTimeDurations";
import translateGenre from "@/utils/genreFinder";
import { translateStatus } from "@/utils/movieStatusTranslation";
import translateLangage from "@/utils/translateLanguage";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import YouTube, { YouTubeProps } from "react-youtube";

export default function MovieDetails() {
  const { id } = useParams();
  const { video } = useGetVideo(id);
  const [movieSelected, setMvieSelected] = useState<IMovieDetails>();
  const trailerOpts: YouTubeProps["opts"] = {
    height: "197",
    width: "382",
  };

  console.log("Filme selecionado: ", movieSelected);

  function votePercentage(votes: number) {
    return (votes * 10).toFixed(0);
  }

  useEffect(() => {
    async function getMovieDetails(id: string) {
      try {
        const { data } = await api.get(
          `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
        );

        setMvieSelected(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails(id!);
  }, [id]);

  return (
    <section className="colorTheme flex flex-col items-center justify-center p-4">
      <img
        src={`https://image.tmdb.org/t/p/original/${movieSelected?.poster_path}`}
        alt={`poster do filme ${movieSelected?.poster_path}`}
        width={382}
        height={582}
        className="mb-4"
      />

      <div className="my-4">
        <div>
          <h3 className="font-montserrat text-[32px] font-semibold text-purple-9 dark:text-mauveDark-12">
            {movieSelected?.title}
          </h3>
          <p className="font-montserrat text-base">
            Título original: {movieSelected?.original_title}
          </p>
          <p className="font-montserrat italic text-purple-9 dark:text-mauveDark-12">
            {movieSelected?.tagline}
          </p>
        </div>

        <div className="my-6 flex justify-between gap-4">
          <div className="cards-details-container w-[136px]">
            <p className="cards-details-title">Pouparidade</p>
            <span className="cards-text font-semibold">
              {movieSelected?.popularity}
            </span>
          </div>

          <div className="cards-details-container w-[116px]">
            <p className="cards-details-title">Votos</p>
            <span className="cards-text font-semibold">
              {movieSelected?.vote_average}
            </span>
          </div>

          <div className="w-[98px]">
            <CircularProgress
              percentage={votePercentage(Number(movieSelected?.vote_average))}
            />
          </div>
        </div>

        <div className="cards-details-container">
          <p className="cards-details-title mb-2 text-sm">Sinopse</p>
          <p className="cards-text">{movieSelected?.overview}</p>
        </div>

        <div className="cards-details-container mt-4">
          <p className="cards-details-title">Generos</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {movieSelected?.genres.map((genre) => (
              <p
                key={genre.id}
                className="flex items-center justify-self-center bg-purple-9 p-2 text-center font-montserrat text-xs font-semibold uppercase text-mauveDark-12 dark:bg-purpleDark-4 dark:text-mauveDark-11"
              >
                {translateGenre(genre.id)}
              </p>
            ))}
          </div>
        </div>

        <div>
          <div className="flex-center justify-between gap-4">
            <div className="cards-details-container w-full">
              <p className="cards-details-title">Lançamento</p>
              <span className="font-montserrat text-sm">
                {formatarData(movieSelected?.release_date)}
              </span>
            </div>

            <div className="cards-details-container w-full">
              <p className="cards-details-title">Duração</p>
              <span className="font-montserrat text-sm">
                {formatTimeDuration(Number(movieSelected?.runtime))}
              </span>
            </div>
          </div>

          <div className="flex-center justify-between gap-4">
            <div className="cards-details-container w-full">
              <p className="cards-details-title">Situação</p>
              <span className="font-montserrat text-sm">
                {translateStatus(movieSelected?.status)}
              </span>
            </div>

            <div className="cards-details-container w-full">
              <p className="cards-details-title">Idioma</p>
              <span className="font-montserrat text-sm">
                {translateLangage(movieSelected?.original_language)}{" "}
              </span>
            </div>
          </div>

          <div className="flex-center justify-between gap-4">
            <div className="cards-details-container w-full">
              <p className="cards-details-title">Orçamento</p>
              <span className="font-montserrat text-sm">
                {movieSelected?.budget === 0
                  ? "Não informado"
                  : `${formatMoney(movieSelected?.budget)}M`}
              </span>
            </div>
            <div className="cards-details-container w-full">
              <p className="cards-details-title">Receita</p>
              <span className="font-montserrat text-sm">
                {movieSelected?.revenue === 0
                  ? "Não informado"
                  : `${formatMoney(movieSelected?.revenue)}M`}
              </span>
            </div>
            <div className="cards-details-container w-full">
              <p className="cards-details-title">Lucro</p>
              <span className="font-montserrat text-sm">
                {Number(movieSelected?.revenue) -
                  Number(movieSelected?.budget) ===
                0
                  ? "Não informado"
                  : `${formatMoney(Number(movieSelected?.revenue) - Number(movieSelected?.budget))}M`}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mb-4 font-montserrat text-2xl font-bold text-purple-9 dark:text-mauveDark-12">
          Trailer
        </h1>
        <YouTube videoId={video?.key} opts={trailerOpts} />
      </div>
    </section>
  );
}
