//thinking:
//create outline for where project info is stored
//have a script.js file feed the info? as an array? into the ProjectContext
//have Projects.js ftn get that info

import React from "react";

const ProjectContext = React.createContext({
  title: "title",
  img: "img",
  description: "description",
  github: "github",
  deployed: "deployed",
});

export default ProjectContext;
