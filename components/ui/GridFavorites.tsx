import { useRouter } from "next/router";
import NextLink from "next/link";
import { Card, Grid } from "@nextui-org/react";

interface Props {
  pokeArray: number[];
}

export function GridFavorites({ pokeArray }: Props) {
  // const router = useRouter();

  // const handleClick = (id: number) => {
  //   router.push(`/pokemon/${id}`);
  // };

  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokeArray.map((id) => (
        <Grid key={id} xs={6} sm={4} md={2} xl={1}>
          <NextLink href={`/pokemon/${id}`}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
              <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width="100%"
                height={140}
              />
            </Card>
          </NextLink>
        </Grid>
      ))}
    </Grid.Container>
  );
}
