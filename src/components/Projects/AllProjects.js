import React, { useContext } from "react";
import Card from "../../utils/Card";
import Project from "./Project";
import { projData } from "./projData";
import ProjectContext from "../../contexts/ProjectContext";

export default function AllProjects() {
  console.log("projData ", projData);
  const { title, img, description, github, deployed } = useContext(
    ProjectContext
  );
  return (
    <Card>
      <Project
        title="t"
        img="i"
        description="des"
        github="git"
        deployed="dep"
      />
      <Project />
      {projData.map((project) => {
        return <p key={project.title}>{project.title}</p>;
      })}
    </Card>
  );
}
