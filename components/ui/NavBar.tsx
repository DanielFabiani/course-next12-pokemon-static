import Image from "next/image";
import { ThemeSwitcher } from ".";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-0">
      <div>
        <Link href="/" passHref className="flex items-center justify-between">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono App"
            width={80}
            height={80}
          />
          <span className="text-4xl font-extrabold text-background dark:text-foreground">
            P
          </span>
          <span className="text-xl font-bold text-background dark:text-foreground">
            okémon
          </span>
        </Link>
      </div>

      <div className="ml-auto flex space-x-6 font-medium">
        <Link href="/favorites" passHref>
          <span className="text-xl font-light text-background dark:text-foreground">
            Favoritos
          </span>
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
