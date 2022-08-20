import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pikachu face"
        width={70}
        height={70}
      />
      <Link href="/">
        <Text css={{ cursor: "pointer" }} color="white" h2>
          Pokemon
        </Text>
      </Link>

      <Spacer css={{ flex: "1" }} />

      <Text color="white" h3>
        Favorites
      </Text>
    </div>
  );
}
