import React from "react";
import "./skills.css";
import Card from "../../utils/Card";

export default function Skills() {
  const skillsArr = [
    "devicon-html5-plain-wordmark",
    "devicon-css3-plain-wordmark",
  ];
  return (
    <Card>
      <div className="row m-4 greyblue">
        <p>SKILLS</p>
      </div>
    </Card>
  );
}
