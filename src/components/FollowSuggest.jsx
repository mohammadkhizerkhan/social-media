import React from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  VStack,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import {MdAdd} from "react-icons/md"

function FollowSuggest() {
  return (
    <>
      <VStack
        alignItems="start"
        pos="fixed"
        top="0"
        right={4}
        zIndex="sticky"
        h="full"
        p="4"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("inherit", "gray.700")}
        borderRightWidth="1px"
        mt={8}
        w="60"
      >
        <Heading as="h1" size="10px" mb="5px">
          Who to follow
        </Heading>
        <Divider />
        <HStack w="full">
          <Avatar name="ryan" src="https://bit.ly/ryan-florence" />
          <VStack alignItems="start">
            <Heading as="h6" size="10px">
              ryan florence
            </Heading>
            <Text mt={0}>ryan123</Text>
          </VStack>
          <Button leftIcon={<MdAdd />} colorScheme="teal" variant="solid" size="xs">
            Follow
          </Button>
        </HStack>
      </VStack>
    </>
  );
}

export default FollowSuggest;
