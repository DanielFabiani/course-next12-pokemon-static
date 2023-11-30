import { useEffect, useState } from "react";

import { Layout } from "@/components/layouts";
import NoFavorites from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";
import FavoritePokemons from "@/components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons | Favorites">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};
export default FavoritesPage;
