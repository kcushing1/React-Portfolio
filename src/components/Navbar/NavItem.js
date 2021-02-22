import React from "react";

export default function ({ href, text }) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={href}>
          {text}
        </a>
      </li>
    </>
  );
}
