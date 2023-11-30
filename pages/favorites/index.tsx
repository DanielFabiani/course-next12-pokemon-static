import { useEffect, useState } from "react";

import { Layout } from "@/components/layouts";
import NoFavorites from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons | Favorites">
      <NoFavorites />
    </Layout>
  );
};
export default FavoritesPage;
