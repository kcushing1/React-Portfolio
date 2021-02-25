import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Header from "./Header/Header";

export default function Container() {
  return (
    <div className="container-fluid bg-dark">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
