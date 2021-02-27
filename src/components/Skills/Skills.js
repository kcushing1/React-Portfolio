import React from "react";
import ReactDOM from "react-dom";
import DevIcon from "devicon-react-svg";
import "./skills.css";

export default function Skills() {
  const skillsArr = [
    "devicon-html5-plain-wordmark",
    "devicon-css3-plain-wordmark",
  ];
  return (
    <div className="row m-4 bg-light">
      <div className="row justify-content-center devicons">
        <p>SKILLS</p>
        {skillsArr.map((skill) => {
          return <i className={skill} key={skill}></i>;
        })}
      </div>
    </div>
  );
}
