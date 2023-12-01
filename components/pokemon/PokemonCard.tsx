import { FC } from "react";

import { useRouter } from "next/router";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { SmallPokemon } from "@/interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Card
      className="border-none bg-background/70 dark:bg-default-100/70"
      key={pokemon.name}
      shadow="md"
      isPressable
      isHoverable
      onClick={onClick}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={pokemon.name}
          className="h-[140px] w-full object-contain"
          src={pokemon.img}
        />
      </CardBody>
      <CardFooter className="justify-between text-base">
        <p className="capitalize">{pokemon.name}</p>
        <b className="text-default-500">#{pokemon.id}</b>
      </CardFooter>
    </Card>
  );
};
