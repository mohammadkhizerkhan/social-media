import { Route, Routes } from "react-router-dom";
import DrawerMenu from "./components/drawer/DrawerMenu";
import Navbar from "./components/Navbar";
import { Landing, Home } from "./pages";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="home" element={<Home />} /> */}
      </Routes>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <DrawerMenu />
        <Box as="section" ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Navbar />
          <Home />
        </Box>
      </Box>
    </div>
  );
}

export default App;
