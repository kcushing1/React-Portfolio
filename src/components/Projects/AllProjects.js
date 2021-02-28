import React, { useContext } from "react";
import Card from "../../utils/Card";
import Project from "./Project";
import ProjectContext from "../../contexts/ProjectContext";

export default function AllProjects() {
  const proj = useContext(ProjectContext);

  return (
    <Card>
      <div id="portfolio">
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
      </div>
    </Card>
  );
}
