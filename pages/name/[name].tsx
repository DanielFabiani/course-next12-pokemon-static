import { useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";

import { Button, Card, CardBody, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { HeartIcon } from "@/components/icons";
import { getPokemonInfo, localFavorites } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id),
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id);

    if (!isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -160,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={`Pokemon | ${pokemon.name}`}>
      <Card
        isBlurred
        className="m-auto mt-10 max-w-[700px] border-none bg-background/60 dark:bg-default-100/80"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4">
            <div className="relative col-span-8 md:col-span-5">
              <Image
                alt={pokemon.name}
                className="object-cover p-2"
                height={200}
                shadow="sm"
                src={pokemon.img}
                width="100%"
              />
            </div>
            <div className="flex w-64 flex-col gap-6 md:w-96">
              <div className="mt-3 flex items-center justify-evenly md:w-96 md:justify-between">
                <h1 className="text-4xl font-medium capitalize">
                  {pokemon.name}
                </h1>
                <Button
                  isIconOnly
                  className="text-primary-500 data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  onPress={() => setIsInFavorites((v) => !v)}
                  onClick={onToggleFavorite}
                >
                  <HeartIcon
                    width={24}
                    height={24}
                    className={
                      isInFavorites ? "[&>path]:stroke-transparent" : ""
                    }
                    fill={isInFavorites ? "currentColor" : "none"}
                  />
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-xl font-light">Types: </span>
                  <span className="capitalize text-default-900/60">
                    {pokemon.type.join(" - ")}
                  </span>
                </div>
                <div>
                  <span className="text-xl font-light">Weight: </span>
                  <span className="capitalize text-default-900/60">
                    {pokemon.weight}
                  </span>
                </div>
              </div>

              <div className=" mx-0 flex w-64 flex-col items-center justify-start md:w-96">
                <h3 className="mr-auto text-left text-xl font-medium capitalize">
                  Sprites:
                </h3>
                <div className="flex flex-wrap justify-between">
                  <Image
                    alt={pokemon.name}
                    className="object-cover"
                    height={200}
                    shadow="none"
                    src={pokemon.sprites.front_default}
                    width="100%"
                  />
                  <Image
                    alt={pokemon.name}
                    className="object-cover"
                    height={200}
                    shadow="none"
                    src={pokemon.sprites.back_default}
                    width="100%"
                  />
                  <Image
                    alt={pokemon.name}
                    className="object-cover"
                    height={200}
                    shadow="none"
                    src={pokemon.sprites.front_shiny}
                    width="100%"
                  />
                  <Image
                    alt={pokemon.name}
                    className="object-cover"
                    height={200}
                    shadow="none"
                    src={pokemon.sprites.back_shiny}
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    // evita que se rendericen paginas que no existen, y lleva al 404
    //fallback: false,

    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  };
};

export default PokemonByNamePage;
