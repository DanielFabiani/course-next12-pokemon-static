import { FC } from "react";

import { useRouter } from "next/router";

import { Card, CardBody, Image } from "@nextui-org/react";

interface Props {
  pokemonId: number;
}

const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Card
      shadow="md"
      isHoverable
      key={pokemonId}
      isPressable
      className="bg-background/60 dark:bg-default-100/80"
    >
      <CardBody className="overflow-visible p-1" onClick={onFavoriteClicked}>
        <Image
          radius="lg"
          width="100%"
          alt={"Pokemon"}
          className="h-[140px] w-full object-contain"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        />
      </CardBody>
    </Card>
  );
};
export default FavoriteCardPokemon;
