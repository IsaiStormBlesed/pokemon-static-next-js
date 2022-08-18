import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Pokemon List">
      <h1>
        Hello World <Button>Click Me</Button>
      </h1>
    </Layout>
  );
};

export default Home;
