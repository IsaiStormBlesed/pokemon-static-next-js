import { Container, Text, Image } from "@nextui-org/react";

export function NoFavorites() {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 100px)",
      }}
    >
      <Text h1>There is no favorites</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt="pikachu face"
        width={250}
        height={250}
        css={{ opacity: 0.1 }}
      />
    </Container>
  );
}
