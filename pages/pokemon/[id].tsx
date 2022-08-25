import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layout";
import { OnePokemon } from "../../interfaces";
import { localFavorites } from "../../utils";

interface Props {
  id: number;
  bigAvatar: string;
  name: string;
  fd: string;
  bd: string;
  fs: string;
  bs: string;
}

const PokemonPage: NextPage<Props> = ({
  id,
  bigAvatar,
  name,
  fd,
  bd,
  fs,
  bs,
}) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.isThereMyPokemon(id)
  );

  const handleFavorite = () => {
    localFavorites.toggleFavorites(id);
    setIsInFavorites(!isInFavorites);
  };

  return (
    <Layout title="Pokemon">
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={bigAvatar || "no-image.png"}
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text css={{ textTransform: "capitalize" }} h1>
                {name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={handleFavorite}
              >
                {isInFavorites ? "On Favorites" : "Save on Favorites"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex">
                <Image src={fd} alt={name} width={100} height={100} />
                <Image src={bd} alt={name} width={100} height={100} />
                <Image src={fs} alt={name} width={100} height={100} />
                <Image src={bs} alt={name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
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
      id: data.id,
      bigAvatar: data.sprites.other?.dream_world.front_default,
      name: data.name,
      fd: data.sprites.front_default,
      bd: data.sprites.back_default,
      fs: data.sprites.front_shiny,
      bs: data.sprites.back_shiny,
    },
  };
};

export default PokemonPage;
