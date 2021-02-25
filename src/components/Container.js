import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Header from "./Header/Header";
import Skills from "./Skills";
import Project from "./Projects/Project";
import About from "./AboutMe/About";
import Contact from "./Contact";

export default function Container() {
  return (
    <div className="container-fluid bg-dark">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
