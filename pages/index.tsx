import { NextPage, GetStaticProps } from "next";

import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonListResponse } from "@/interfaces";
import { SmallPokemon } from "../interfaces/pokemon-list";
import { PokemonCard } from "@/components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  //console.log(pokemons);

  return (
    <Layout title="Listado de Pokemons">
      <div className="m-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </Layout>
  );
};

// solo se ejecuta del lado del servidor y en build time
// se debe usar solo cuando podamos saber de antemano que esos son los parámetros que la pagina necesita

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, idx) => ({
    /* name: poke.name,
    url: poke.url, */
    ...poke,
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      idx + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
