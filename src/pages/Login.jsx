import React from "react";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import { Hero } from "../components";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <Box px={8} py={24} mx="auto">
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
      >
        <Hero/>
        <LoginForm/>
      </SimpleGrid>
    </Box>
  );
}
