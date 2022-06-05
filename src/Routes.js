import React from "react";
import {Routes as RoutesContainer,Route } from "react-router-dom";
import App from "./App";
import { Explore, Saved, Home,Landing, Profile } from "./pages";

function Routes() {
  return (
    <>
      <RoutesContainer>
        <Route element={<App />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </RoutesContainer>
    </>
  );
}

export default Routes;
