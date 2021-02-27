import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Project from "./Projects/Project";
import About from "./AboutMe/About";
import Contact from "./Contact";
import AllProjects from "./Projects/AllProjects";
import { projData } from "./Projects/projData";
import ProjectContext from "../contexts/ProjectContext";

export default function Container() {
  return (
    <div className="container-fluid bg-dark">
      <Navbar />
      <Header />
      <About />
      <ProjectContext.Provider value={projData}>
        <AllProjects />
      </ProjectContext.Provider>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
