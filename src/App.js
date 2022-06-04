import { Outlet, Route,Routes } from "react-router-dom";
import DrawerMenu from "./components/drawer/DrawerMenu";
import Navbar from "./components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Landing } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <DrawerMenu />
        <Box as="section" ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Navbar />
          <Outlet/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
