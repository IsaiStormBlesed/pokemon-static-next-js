import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title || "Pokemon App"}</title>
        <meta name="author" content="Isai Reyes" />
        <meta name="description" content="Info about ${name of the pokemon}" />
        <meta
          name="keywords"
          content="${name of the pokemon}, pokemon, pokedex"
        />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {props.children}
      </main>
    </>
  );
};
