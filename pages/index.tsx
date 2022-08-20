import type { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Pokemon List">
      <h1>Hello World</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await pokeApi.get("/pokemon?limit=151");
  console.log({ res });

  return {
    props: {},
  };
};

export default Home;
