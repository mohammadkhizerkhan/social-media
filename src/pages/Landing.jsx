import React from "react";
import {
  chakra,
  Box,
  GridItem,
  useColorModeValue,
  Button,
  Stack,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  VisuallyHidden,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
  useColorMode,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MdOutlineLock, MdOutlineMail } from "react-icons/md";
import { Hero } from "../components";
import Signup from "./Signup";

export default function Landing() {
  const bgColor = useColorModeValue("black", "white");
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
        <Signup/>
      </SimpleGrid>
    </Box>
  );
}
