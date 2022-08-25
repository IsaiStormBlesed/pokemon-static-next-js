import { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { GridFavorites, NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

export default function FavoritesPage() {
  const [favPokemon, setFavPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavPokemon(localFavorites.getFavoritesPokemon());
  }, []);

  return (
    <Layout title="Favorites Pokemon">
      {favPokemon.length == 0 ? (
        <NoFavorites />
      ) : (
        <GridFavorites pokeArray={favPokemon} />
      )}
    </Layout>
  );
}
