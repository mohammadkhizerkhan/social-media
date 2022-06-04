import React from "react";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
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
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
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
        <NavItem as={NavLink} to="/home" _activeLink={{fontWeight:"bold",color:"brand.500",backgroundColor:"brand.100"}} icon={MdHome} fontSize="2xl" fontWeight="bold">
          Feed
        </NavItem>
        <NavItem as={NavLink} to="/explore" _activeLink={{fontWeight:"bold",color:"brand.500",backgroundColor:"brand.100"}} icon={MdExplore} fontSize="2xl" fontWeight="bold">
          Explore
        </NavItem>
        <NavItem as={NavLink} to="/saved" _activeLink={{fontWeight:"bold",color:"brand.500",backgroundColor:"brand.100"}} icon={MdOutlineBookmark} fontSize="2xl" fontWeight="bold">
          Saved
        </NavItem>
        <NavItem as={NavLink} to="/profile" _activeLink={{fontWeight:"bold",color:"brand.500",backgroundColor:"brand.100"}} fontSize="2xl" fontWeight="bold" icon={FaUserCircle}>
          Profile
        </NavItem>
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color={useColorModeValue("inherit", "gray.400")}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.900"),
            color: useColorModeValue("gray.900", "gray.200"),
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
        >
          <Button variant="solid" colorScheme="brand" fontSize="xl">
            Add a Post
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SidebarContent;
