import { FC, ReactNode } from "react";

import Head from "next/head";

import { NavBar } from "../ui";

interface Props {
  title?: string;
  children?: ReactNode;
}

//se usa para traer el origen del URL, sea localhost o un uno ya en la nube
const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="viewport" content="width=device-width, initial-scale" />
        <meta name="author" content="Daniel Fabiani" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <NavBar />

      <main className="mx-auto max-w-7xl px-9 py-0">{children}</main>
    </>
  );
};
