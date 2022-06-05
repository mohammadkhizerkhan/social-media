import React from "react";
import { Box, Button, Flex, Text, useColorModeValue,Center } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { MdHome, MdOutlineBookmark, MdExplore } from "react-icons/md";
import NavItem from "./components/NavItem";
import { NavLink } from "react-router-dom";
function SidebarContent(props) {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left={20}
      mt={8}
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("inherit", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          Choc UI
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem
          as={NavLink}
          to="/home"
          borderRadius="3xl"
          _activeLink={{
            fontWeight: "bold",
            color: "brand.500",
            backgroundColor: "brand.100",
          }}
          icon={MdHome}
          fontSize="2xl"
          fontWeight="bold"
        >
          Feed
        </NavItem>
        <NavItem
          as={NavLink}
          to="/explore"
          borderRadius="3xl"
          _activeLink={{
            fontWeight: "bold",
            color: "brand.500",
            backgroundColor: "brand.100",
          }}
          icon={MdExplore}
          fontSize="2xl"
          fontWeight="bold"
        >
          Explore
        </NavItem>
        <NavItem
          as={NavLink}
          to="/saved"
          borderRadius="3xl"
          _activeLink={{
            fontWeight: "bold",
            color: "brand.500",
            backgroundColor: "brand.100",
          }}
          icon={MdOutlineBookmark}
          fontSize="2xl"
          fontWeight="bold"
        >
          Saved
        </NavItem>
        <NavItem
          as={NavLink}
          to="/profile"
          borderRadius="3xl"
          _activeLink={{
            fontWeight: "bold",
            color: "brand.500",
            backgroundColor: "brand.100",
          }}
          fontSize="1.5rem"
          fontWeight="bold"
          icon={FaUserCircle}
        >
          Profile
        </NavItem>
        <Button
          align="center"
          p={4}
          mt={4}
          cursor="pointer"
          color={useColorModeValue("inherit", "gray.400")}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.900"),
            color: useColorModeValue("gray.900", "gray.200"),
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          fontSize="1xl"
          borderRadius="3xl"
        >
          Add a Post
        </Button>
      </Flex>
    </Box>
  );
}

export default SidebarContent;
