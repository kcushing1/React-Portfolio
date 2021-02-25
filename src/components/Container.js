import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Header from "./Header/Header";
import Skills from "./Skills";
import Project from "./Projects/Project";

export default function Container() {
  return (
    <div className="container-fluid bg-dark">
      <Navbar />
      <Header />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}
