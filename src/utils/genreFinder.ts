interface IGenre {
  id: number;
  name: string;
  translation: string;
}

export const genres: IGenre[] = [
  {
    id: 28,
    name: "Action",
    translation: "Ação",
  },
  {
    id: 12,
    name: "Adventure",
    translation: "Aventura",
  },
  {
    id: 16,
    name: "Animation",
    translation: "Animação",
  },
  {
    id: 35,
    name: "Comedy",
    translation: "Comédia",
  },
  {
    id: 80,
    name: "Crime",
    translation: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
    translation: "Documentário",
  },
  {
    id: 18,
    name: "Drama",
    translation: "Drama",
  },
  {
    id: 10751,
    name: "Family",
    translation: "Família",
  },
  {
    id: 14,
    name: "Fantasy",
    translation: "Fantasia",
  },
  {
    id: 36,
    name: "History",
    translation: "História",
  },
  {
    id: 27,
    name: "Horror",
    translation: "Terror",
  },
  {
    id: 10402,
    name: "Music",
    translation: "Música",
  },
  {
    id: 9648,
    name: "Mystery",
    translation: "Mistério",
  },
  {
    id: 10749,
    name: "Romance",
    translation: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
    translation: "Ficção Científica",
  },
  {
    id: 10770,
    name: "TV Movie",
    translation: "Filme de TV",
  },
  {
    id: 53,
    name: "Thriller",
    translation: "Suspense",
  },
  {
    id: 10752,
    name: "War",
    translation: "Guerra",
  },
  {
    id: 37,
    name: "Western",
    translation: "Faroeste",
  },
];

export default function translateGenre(id: number) {
  const genre = genres.find((genre) => genre.id === id);
  return genre ? genre.translation : "Não encontrado";
}
