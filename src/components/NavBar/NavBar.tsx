import filterIcon from "@/assets/icons/filter.svg";
import searchIcon from "@/assets/icons/search.svg";
import { genres } from "@/utils/genreFinder";
import React, { useState } from "react";
import CmInput from "../ui/CmInput/CmInput";
import CmSmallButton from "../ui/CmSmallButton/CmSmallButton";

interface Iprops {
  setQueryParams: React.Dispatch<React.SetStateAction<string | undefined>>;
  setGenreFilter: React.Dispatch<
    React.SetStateAction<number | number[] | undefined>
  >;
}

export default function NavBar({ setQueryParams, setGenreFilter }: Iprops) {
  const [filterOptions, setFilterOptions] = useState<boolean>();

  return (
    <nav className="flex flex-col items-center">
      <div className="flex-center h-[88px] w-full gap-[10px] p-4">
        <CmInput
          type="text"
          placeholder="Pesquise por filmes"
          src={searchIcon}
          alt="procurar"
          setQueryParams={setQueryParams}
          setGenreFilter={setGenreFilter}
        />

        <CmSmallButton
          src={filterIcon}
          alt="filtrar"
          className="h-14 w-[55px]"
          onClick={() => setFilterOptions((prev) => !prev)}
        />
      </div>
      {filterOptions && (
        <div className="flex w-[95%] flex-col rounded p-4">
          <p className="filter-title">gêneros</p>

          <div className="flex-center mt-4 flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre.id}
                className="filter-cards"
                onClick={() => setGenreFilter(genre.id)}
              >
                {genre.translation}
              </button>
            ))}
          </div>

          <button
            className="mt-6 w-[40%] self-center rounded bg-mauveDark-1 py-2 text-mauve-1 dark:bg-mauve-1 dark:text-purple-12 desktop:w-[15%]"
            onClick={() => setGenreFilter(undefined)}
          >
            <strong className="mr-2">X</strong> Limpar Filtros
          </button>
        </div>
      )}
    </nav>
  );
}
