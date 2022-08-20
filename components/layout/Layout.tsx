import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Isai Reyes" />
        <meta name="description" content="Info about ${name of the pokemon}" />
        <meta
          name="keywords"
          content="${name of the pokemon}, pokemon, pokedex"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
