import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Skills from "../components/Skills/Skills";
import About from "../components/AboutMe/About";
import Contact from "../components/Contact";
import AllProjects from "../components/Projects/AllProjects";
import { projData } from "../components/Projects/projData";
import ProjectContext from "../contexts/ProjectContext";

export default function Home() {
  return (
    <Container>
      <Header />
      <About />
      <ProjectContext.Provider value={projData}>
        <AllProjects />
      </ProjectContext.Provider>
      <Skills />
      <Contact />
    </Container>
  );
}
