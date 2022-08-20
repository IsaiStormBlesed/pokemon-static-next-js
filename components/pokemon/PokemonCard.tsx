import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { PokemonList } from "../../interfaces";

interface Props {
  pokemon: PokemonList;
}

export const PokemonCard: FC<Props> = ({ pokemon: { img, name, id } }) => {
  return (
    <Grid xs={6} sm={4} md={2} xl={1}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            alt={name}
            // objectFit="cover"
            width="100%"
            height={140}
          />
          <Card.Footer>
            <Row justify="space-between" align="center">
              <Text transform="capitalize">{name}</Text>
              <Text>#{id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
