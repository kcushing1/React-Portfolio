import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="mts-img row">
      <div className="col">
        <img
          src="./images/mts.png"
          alt="Franconia Notch Ridge from North Kinsman Mt"
        />
        <div className="img-name">
          <h1>Kasey Cushing</h1>
          <p>Full Stck Web Developer</p>
        </div>
      </div>
    </div>
  );
}
