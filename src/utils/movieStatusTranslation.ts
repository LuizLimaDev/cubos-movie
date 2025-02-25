type IMovieStatus = {
  originalStatus: string;
  translation: string;
};

const movieStatuses: IMovieStatus[] = [
  { originalStatus: "Rumored", translation: "Rumores" },
  { originalStatus: "Planned", translation: "Planejado" },
  { originalStatus: "In_production", translation: "Em Produção" },
  { originalStatus: "Post_production", translation: "Pós-Produção" },
  { originalStatus: "Released", translation: "Lançado" },
  { originalStatus: "Canceled", translation: "Cancelado" },
];

export function translateStatus(statusToTranslate: string | undefined) {
  const currentStatus = movieStatuses.find(
    (status) => status.originalStatus == statusToTranslate,
  );

  return `${currentStatus?.translation}`;
}
