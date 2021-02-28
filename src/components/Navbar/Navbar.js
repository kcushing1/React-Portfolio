import React from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="row navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#page-top">
        Kasey Cushing
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end mr-6"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <NavItem href="#about-me" text="About Me" />
          <NavItem href="#portfolio" text="Portfolio" />
          <NavItem href="#skills" text="Technical Skills" />
          <NavItem href="#contact-me" text="Contact Me" />
        </ul>
      </div>
    </nav>
  );
}
