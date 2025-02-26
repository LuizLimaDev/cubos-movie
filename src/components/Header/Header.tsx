import sun from "@/assets/icons/sun.svg";
import logo from "@/assets/logo/logo-cubos.svg";
import logoDark from "@/assets/logo/logo-dark.jpg";
import { useState } from "react";
import { Link } from "react-router";
import CmSmallButton from "../ui/CmSmallButton/CmSmallButton";

export default function Header() {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  }

  return (
    <header className="colorTheme flex h-20 w-full items-center justify-between border-b border-purple-9 p-4">
      <div className="flex h-[36px] w-[247px] items-center justify-center gap-4">
        <Link to="/">
          {isDarkMode ? (
            <img src={logo} alt="cubos movie logo" width={160} height={36} />
          ) : (
            <img
              src={logoDark}
              alt="cubos movie logo"
              width={160}
              height={36}
            />
          )}
        </Link>{" "}
        <h1 className="text-bold mt-1 font-inter text-xl text-purple-9 dark:text-mauveDark-12">
          Movies
        </h1>
      </div>

      <CmSmallButton src={sun} alt="cubos movie logo" onClick={toggleTheme} />
    </header>
  );
}
