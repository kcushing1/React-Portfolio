import React, { useContext } from "react";
import Card from "../../utils/Card";
import Project from "./Project";
import ProjectContext from "../../contexts/ProjectContext";

export default function AllProjects() {
  //console.log("projData ", projData);
  const proj = useContext(ProjectContext);

  //console.log("projCtx", ProjectContext);
  console.log("proj ", proj);

  return (
    <Card>
      {proj.map((project) => {
        return (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
          />
        );
      })}
    </Card>
  );
}
