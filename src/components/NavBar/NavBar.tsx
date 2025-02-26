import filterIcon from "@/assets/icons/filter.svg";
import searchIcon from "@/assets/icons/search.svg";
import React from "react";
import CmInput from "../ui/CmInput/CmInput";
import CmSmallButton from "../ui/CmSmallButton/CmSmallButton";

interface Iprops {
  setQueryParams: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavBar({ setQueryParams }: Iprops) {
  return (
    <nav className="flex-center h-[88px] w-full gap-[10px] p-4">
      <CmInput
        type="text"
        placeholder="Pesquise por filmes"
        src={searchIcon}
        alt="procurar"
        setQueryParams={setQueryParams}
      />

      <CmSmallButton src={filterIcon} alt="filtrar" className="h-14 w-[55px]" />
    </nav>
  );
}
