import Image from "next/image";
import { ThemeSwitcher } from ".";

export const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between bg-primary-800 px-8 py-0 shadow-md dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Icono App"
          width={80}
          height={80}
        />
        <span className="text-4xl font-extrabold">P</span>
        <span className="text-xl font-bold">okémon</span>
      </div>

      <div className="ml-auto flex space-x-6 font-medium">
        <span>Favoritos</span>

        <ThemeSwitcher />
      </div>
    </div>
  );
};
