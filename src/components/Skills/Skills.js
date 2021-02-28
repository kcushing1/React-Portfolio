import React from "react";
import "./skills.css";
import Card from "../../utils/Card";
import SkillCell from "./SkillCell";

export default function Skills() {
  const skillsArr = ["test 1", "test 2", "test 3"];
  return (
    <Card>
      <h3 className="text-center text-light" id="skills">
        Technical Skills
      </h3>
      <div className="row m-2">
        <SkillCell skill="React" />
        <SkillCell skill="express.js" />
        <SkillCell skill="JavaScipt" />
        <SkillCell skill="node.js" />
      </div>
      <div className="row m-2">
        <SkillCell skill="HTML5" />
        <SkillCell skill="MySQL" />
        <SkillCell skill="MongoDB" />
        <SkillCell skill="indexedDB" />
      </div>
      <div className="row m-2">
        <SkillCell skill="CSS3" />
        <SkillCell skill="jQuery" />
        <SkillCell skill="GitHub" />
        <SkillCell skill="Bootstrap4" />
      </div>
    </Card>
  );
}
