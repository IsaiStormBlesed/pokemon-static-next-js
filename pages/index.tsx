import type { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { PokemonList, PokemonRes } from "../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";
import { Layout } from "../components/layout/Layout";

interface Props {
  pokemons: PokemonList[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon List">
      <Grid.Container gap={2}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonRes>("/pokemon?limit=151");

  const pokemons: PokemonList[] = data.results.map((pok, idx) => ({
    ...pok,
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

export default Home;
