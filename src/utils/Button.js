import React from "react";

export default function Button({ label, onClick, text }) {
  return (
    <button
      className="btn btn-primary"
      type="button"
      label={label}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
