import React from "react";

export function Button({ type = "default", label, onClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
}
