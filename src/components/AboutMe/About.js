import React from "react";
import "./about.css";
import Resume from "../Links/Resume";

export default function About() {
  return (
    <div className="row greyblue m-4" id="about-me">
      <div className="col-md-5 border-0 card greyblue ml-6 align-self-center p-0">
        <div className="card-body greyblue img-rounded">
          <img
            id="headshot"
            src="./images/KCushingHeadshot.jpg"
            alt="Kasey Cushing"
            className="rounded"
          />
        </div>
      </div>
      <div className="col-md-6 card greyblue p-0 border-0 text-center align-self-center">
        <div className="card-body greyblue p-0">
          <h3>Hello There!</h3>
          <p>
            An energetic professional with a{" "}
            <span className="seehere">passion for people</span>, learning, and
            new experiences. Currently a Team Lead in healthcare administration
            but hoping to transition into{" "}
            <span className="seehere">full-stack web development</span>.
            Learning a plethora of new skills such as JavaScript and responsive
            web design with{" "}
            <a target="_blank" href="https://bootcamp.unh.edu/">
              <span className="seehere">UNH Coding Bootcamp</span>
            </a>
            . Goal-and-detail-oriented, adaptable, communicative, and skilled at
            tackling and prioritizing multiple projects while maintaining a{" "}
            <span className="seehere">positive attitude</span>. Excited to
            problem solve, develop apps, mend bugs, and{" "}
            <span className="seehere">improve services</span> to users across
            the web. Looking for an organization that will challenge me while
            encouraging my personal and professional
            <span className="seehere"> growth</span>.
          </p>
          <p>
            <Resume className="seehere" />
          </p>
        </div>
      </div>
    </div>
  );
}
