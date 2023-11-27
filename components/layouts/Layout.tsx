import { FC, ReactNode } from "react";

import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
  title?: string;
  children?: ReactNode;
}

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
      </Head>

      <NavBar />

      <main className="px-9 py-0 max-lg:max-w-5xl">{children}</main>
    </>
  );
};
