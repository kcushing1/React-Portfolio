//navbar
//footer

//////change the container to Main page
//wrap in Container here

import React from "react";
import Github from "../components/Links/Github";
import LinkedIn from "../components/Links/LinkedIn";
import Container from "../components/Container";
import ExtraFacts from "../components/Facts/ExtraFacts";
import Resume from "../components/Links/Resume";

export default function Facts() {
  return (
    <Container>
      <div className="row text-center">
        <div className="col">
          <Github />
        </div>
        <div className="col">
          <LinkedIn />
        </div>
        <div className="col">
          <Resume className={"text-light"} />
        </div>
      </div>
      <ExtraFacts />
    </Container>
  );
}
