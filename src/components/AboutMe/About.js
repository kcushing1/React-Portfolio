import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="row greyblue" id="about-me">
      <div className="col-md-5 card border-0 ml-6 align-self-center">
        <div className="card-body img-rounded">
          <p>image</p>
        </div>
      </div>
      <div className="col-md-6 card mr-3 border-0 text-center align-self-center">
        <div className="card-body">
          <h3>Hello There!</h3>
          <p>An energetic professional with a </p>
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
}
