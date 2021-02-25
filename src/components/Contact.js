import React from "react";
import LinkedIn from "./Links/LinkedIn";
import Github from "./Links/Github";

export default function Contact() {
  return (
    <div>
      <h3>contact section</h3>
      <div style={{ background: "red" }}>
        <LinkedIn />
        <Github />
      </div>
    </div>
  );
}
