import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title || "Pokemon App"}</title>
        <meta name="author" content="Isai Reyes" />
        <meta name="description" content={`Info about ${props.title}`} />
        <meta name="keywords" content={`${props.title}, pokemon, pokedex`} />

        <meta
          property="og:title"
          content={`Information about ${props.title}`}
        />
        <meta
          property="og:description"
          content={`Content about ${props.title}`}
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
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
