import React from "react";
import "./blurb.css";

export default function Blurb({ text }) {
  return (
    <div className="row py-3">
      <div className="col">
        <p className="card-body rounded shorten greyblue">{text}</p>
      </div>
    </div>
  );
}
