import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";


export const getPokemonInfo = async ( nameOrId: string) => {

  try {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    return {
      id: data.id,
      name: data.name,
      img: data.sprites.other?.dream_world.front_default,
      sprites: data.sprites,
      exp: data.base_experience,
      weight: data.weight,
      type: data.types.map((type) => type.type.name),
    }
  } catch (error) {
    return null;
  }

}