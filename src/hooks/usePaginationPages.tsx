interface paginationProps {
  totalMovies: number;
  moviesPerPage: number;
}

export default function usePaginationPages({
  totalMovies,
  moviesPerPage,
}: paginationProps) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }

  return { pages };
}
