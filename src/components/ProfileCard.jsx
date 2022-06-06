import React from "react";
import {
  chakra,
  Box,
  Image,
  Avatar,
  Flex,
  useColorModeValue,
  Link,
  Input,
  Text,
  Button,
  VStack,
  HStack,
  Heading,
  InputRightElement,
  InputGroup,
  Icon,
} from "@chakra-ui/react";
import { MdOutlineBookmarkBorder, MdOutlineMoreVert } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";

function ProfileCard() {
  return (
    <Flex w="full" alignItems="center" justifyContent="center" mt={4}>
      <Box
        mx="20px"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="1xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <HStack w="full" alignItems="start">
            <Avatar name="ryan" src="https://bit.ly/ryan-florence" size="lg" />
            <VStack alignItems="start" justifyContent="center">
              <Heading as="h6" size="10px">
                ryan florence
                <chakra.span
                  ml="4px"
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  @ryan123
                </chakra.span>
              </Heading>
              <Text
                mt={0}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Mar 10, 2019
              </Text>
              <chakra.p
                mt={2}
                color={useColorModeValue("gray.600", "gray.300")}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora
              </chakra.p>
              <Flex w="full">
                <Button variant="link" mr="20px">
                  5 Posts
                </Button>
                <Button variant="link" mr="20px">
                  3 Followers
                </Button>
                <Button variant="link" mr="20px">
                  5 Following
                </Button>
              </Flex>
              <Link color={"brand.600"} href="https://peerlist.io/khizerkhan">
                https://peerlist.io/khizerkhan
              </Link>
            </VStack>
          </HStack>
          <Button
            alignSelf="start"
            borderRadius="4px"
            px="25px"
            w="20px"
            mr="10px"
          >
            Edit
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ProfileCard;
