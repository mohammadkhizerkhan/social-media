import { Route, Routes } from "react-router-dom";
import { Landing, Home } from "./pages";
import { useColorMode, Button } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Button
        onClick={toggleColorMode}
        colorScheme="brand"
        w="full"
        py={2}
        type="button"
      >
        {colorMode === "light" ? "dark mode" : "light mode"}
      </Button>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
