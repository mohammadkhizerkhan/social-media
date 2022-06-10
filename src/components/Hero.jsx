import React from "react";
import { chakra, GridItem, useColorModeValue, Stack } from "@chakra-ui/react";

function Hero() {
  return (
    <GridItem
      colSpan={{ sm: 3, md: 5, lg: 7 }}
      textAlign={{ base: "center", lg: "left" }}
    >
      <chakra.h1
        mb={10}
        fontSize={{ base: "4xl", md: "8xl" }}
        fontWeight="bold"
        lineHeight={{ base: "shorter", md: "none" }}
        color={useColorModeValue("brand.600", "brand.300")}
        letterSpacing={{ base: "normal", md: "tight" }}
      >
        AMIGOS
      </chakra.h1>
      <Stack direction={["column", "row"]} spacing="24px">
        <chakra.h1
          mb={4}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight={{ base: "shorter", md: "none" }}
          color={useColorModeValue("gray.900", "gray.200")}
          letterSpacing={{ base: "normal", md: "tight" }}
        >
          FOLLOW
        </chakra.h1>
        <chakra.p alignSelf="center" marginLeft={2}>
          PEOPLE AROUND THE GLOBE.
        </chakra.p>
      </Stack>
      <Stack direction={["column", "row"]} spacing="24px">
        <chakra.h1
          mb={4}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight={{ base: "shorter", md: "none" }}
          color={useColorModeValue("gray.900", "gray.200")}
          letterSpacing={{ base: "normal", md: "tight" }}
        >
          CONNECT
        </chakra.h1>
        <chakra.p alignSelf="center" marginLeft={2}>
          WITH YOUR FRIENDS.
        </chakra.p>
      </Stack>
      <Stack direction={["column", "row"]} spacing="24px">
        <chakra.h1
          mb={4}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight={{ base: "shorter", md: "none" }}
          color={useColorModeValue("gray.900", "gray.200")}
          letterSpacing={{ base: "normal", md: "tight" }}
        >
          SHARE
        </chakra.h1>
        <chakra.p alignSelf="center" marginLeft={2}>
          WHAT YOU THINK.
        </chakra.p>
      </Stack>
    </GridItem>
  );
}

export default Hero;
