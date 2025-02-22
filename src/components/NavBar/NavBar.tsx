import filterIcon from "@/assets/icons/filter.svg";
import searchIcon from "@/assets/icons/search.svg";
import CmInput from "../ui/CmInput/CmInput";
import CmSmallButton from "../ui/CmSmallButton/CmSmallButton";

export default function NavBar() {
  return (
    <nav className="flex-center h-[88px] w-full gap-[10px] p-4">
      <CmInput
        type="text"
        placeholder="Pesquise por filmes"
        src={searchIcon}
        alt="procurar"
      />

      <CmSmallButton src={filterIcon} alt="filtrar" className="h-14 w-[55px]" />
    </nav>
  );
}
