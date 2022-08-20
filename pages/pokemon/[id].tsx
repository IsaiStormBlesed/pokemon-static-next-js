import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layout";
import { OnePokemon } from "../../interfaces";

interface Props {
  pokemon: OnePokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();

  return <Layout title="Pokemon">{pokemon.name}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((_, idx) => `${idx + 1}`);

  return {
    paths: pokemon151.map((idx) => ({ params: { id: idx } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await pokeApi.get<OnePokemon>(`/pokemon/${params?.id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
