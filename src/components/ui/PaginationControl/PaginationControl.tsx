import arrowPages from "@/assets/icons/arrow-pages.svg";
import { Dispatch, SetStateAction } from "react";

interface paginationProps {
  currentPage: number;
  pages: number[];
  lastPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function PaginationControl({
  currentPage,
  pages,
  setCurrentPage,
  lastPage,
}: paginationProps) {
  return (
    <div className="flex-center m-6 gap-3">
      <button
        className={`${currentPage === 1 ? "bg-mauveDark-4" : "bg-purpleDark-9"} flex-center h-11 w-12 text-mauveDark-12`}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={arrowPages} alt="voltar página" className="rotate-180" />
      </button>
      {pages.map((page) => {
        return (
          <button
            key={page}
            className={`${page === currentPage ? "bg-purpleDark-6" : "bg-purpleDark-9"} h-11 w-12 text-mauveDark-12`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className={`${currentPage === lastPage ? "bg-mauveDark-4" : "bg-purpleDark-9"} flex-center h-11 w-12 text-mauveDark-12`}
        onClick={() =>
          currentPage < pages.length && setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === lastPage}
      >
        <img src={arrowPages} alt="avançar página" />
      </button>
    </div>
  );
}
