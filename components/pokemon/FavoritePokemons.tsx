import { FC } from "react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
  pokemons: number[];
}
const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <div className="mt-10 grid grid-cols-2 justify-center gap-8 sm:grid-cols-4">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </div>
  );
};
export default FavoritePokemons;
