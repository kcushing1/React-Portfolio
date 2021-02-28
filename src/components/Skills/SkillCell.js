import React from "react";
import "./skills.css";

export default function SkillCell({ skill }) {
  return (
    <div className="col">
      <div className="row">
        <button
          className="col border-0 rounded m-4 greyblue skill"
          key={skill}
          aria-disabled="true"
        >
          {skill}
        </button>
      </div>
    </div>
  );
}
