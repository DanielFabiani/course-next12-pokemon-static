import { GetStaticProps, NextPage, GetStaticPaths } from "next";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Algún pokemon">
      <h1>{pokemon.name}</h1>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
//se ejecuta del lado del servidor  y solo se ejecuta en build time,

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    // evita que se rendericen paginas que no existen, y lleva al 404
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  const pokeDetails = {
    id: data.id,
    name: data.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    exp: data.base_experience,
    weight: data.weight,
    type: data.types.map((type) => type.type.name),
  };
  //console.log("getStaticsProps pokeDetails", pokeDetails);

  return {
    props: {
      pokemon: pokeDetails,
    },
  };
};

export default PokemonPage;
