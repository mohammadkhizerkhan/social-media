import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import SidebarContent from "./SidebarContent";

function DrawerMenu() {
  const sidebar = useDisclosure();
  
  const integrations = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");
  return (
    <>
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
