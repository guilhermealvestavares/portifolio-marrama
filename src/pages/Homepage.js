import React from "react";

import { Footer } from "../components/Footer";
import Container from "react-bootstrap/Container";
import { GoalsAndSKills } from "../sections/GoalsAndSkills";
import { About } from "../sections/About";

export const Homepage = () => {
  return (
    <>
      <Container>
        <GoalsAndSKills />
        <About />
      </Container>
    </>
  );
};
