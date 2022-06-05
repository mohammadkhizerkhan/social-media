import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useColorMode,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
function Navbar() {
    const sidebar = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Flex
        as="header"
        align="center"
        justify="space-between"
        w="full"
        px="4"
        bg={useColorModeValue("white", "gray.800")}
        borderBottomWidth="1px"
        borderColor={useColorModeValue("inherit", "gray.700")}
        h="14"
      >
        <IconButton
          aria-label="Menu"
          display={{ base: "inline-flex", md: "none" }}
          onClick={sidebar.onOpen}
          icon={<FiMenu />}
          size="sm"
        />
        <InputGroup mx={8} w="full" display={{ base: "unset", md: "flex" }}>
          <InputLeftElement color="gray.500">
            <FiSearch />
          </InputLeftElement>
          <Input w="full" placeholder="Search for articles..." />
        </InputGroup>
        <Button
          onClick={toggleColorMode}
          colorScheme="brand"
          py={2}
          type="button"
          mr={4}
        >
          {colorMode === "light" ? "dark mode" : "light mode"}
        </Button>

        <Flex align="center">
          <Icon color="gray.500" as={FaBell} cursor="pointer" />
          <Avatar
            ml="4"
            size="sm"
            name="anubra266"
            src="https://avatars.githubusercontent.com/u/30869823?v=4"
            cursor="pointer"
          />
        </Flex>
      </Flex>
  );
}

export default Navbar;
