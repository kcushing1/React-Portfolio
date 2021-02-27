import React from "react";

export default function Card({ children }) {
  return (
    <div className="row m-4">
      <div className="col">{children}</div>
    </div>
  );
}
