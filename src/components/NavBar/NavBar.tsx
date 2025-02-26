import filterIcon from "@/assets/icons/filter.svg";
import searchIcon from "@/assets/icons/search.svg";
import { genres } from "@/utils/genreFinder";
import React, { useState } from "react";
import CmInput from "../ui/CmInput/CmInput";
import CmSmallButton from "../ui/CmSmallButton/CmSmallButton";

interface Iprops {
  setQueryParams: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavBar({ setQueryParams }: Iprops) {
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
        />

        <CmSmallButton
          src={filterIcon}
          alt="filtrar"
          className="h-14 w-[55px]"
          onClick={() => setFilterOptions((prev) => !prev)}
        />
      </div>
      {filterOptions && (
        <div className="w-[95%] rounded p-4">
          <p className="filter-title">gêneros</p>

          <div className="flex-center mt-4 flex-wrap gap-2">
            {genres.map((genre) => (
              <button key={genre.id} className="filter-cards">
                {genre.translation}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
