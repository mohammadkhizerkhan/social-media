import { Outlet, Route,Routes } from "react-router-dom";
import DrawerMenu from "./components/drawer/DrawerMenu";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Landing } from "./pages";
import { FollowSuggest, Navbar } from "./components";

function App() {
  return (
    <div className="App" >
      <Box
        as="section"
        minH="100vh"
      >
        <DrawerMenu />
        <Box as="section" mx={{ base: 0, md: 80 }} transition=".3s ease">
          <Navbar/>
          <Outlet/>
        </Box>
        <FollowSuggest/>
      </Box>
    </div>
  );
}

export default App;
