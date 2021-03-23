import React from "react";

export default function Container({ children }) {
  return <div className="container-fluid bg-dark mh-100">{children}</div>;
}
