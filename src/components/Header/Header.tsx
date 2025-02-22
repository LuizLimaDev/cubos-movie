import sun from "@/assets/icons/sun.svg";
import logo from "@/assets/logo-cubos.svg";
import CmSmallButton from "../ui/CmSmallButton/CmSmallButton";

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-mauveDark-7 p-4">
      <div className="flex h-[36px] w-[247px] items-center justify-center gap-4">
        <img src={logo} alt="cubos movie logo" width={160} height={36} />
        <h1 className="text-bold mt-1 font-inter text-xl text-mauve-1">
          Movies
        </h1>
      </div>

      <CmSmallButton src={sun} alt="cubos movie logo" />
    </header>
  );
}
