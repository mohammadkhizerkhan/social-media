import React from "react";
import { SideBar } from "../components";
import { chakra } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <SideBar />
      <chakra.h1>This is home</chakra.h1>
    </>
  );
}

export default Home;

