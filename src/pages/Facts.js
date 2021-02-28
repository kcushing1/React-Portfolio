//navbar
//footer

//////change the container to Main page
//wrap in Container here

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Github from "../components/Links/Github";
import LinkedIn from "../components/Links/LinkedIn";
import Container from "../components/Container";

export default function Facts() {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <Github />
        </div>
        <div className="col">
          <LinkedIn />
        </div>
      </div>
      <Facts />
    </Container>
  );
}
