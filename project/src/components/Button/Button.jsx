import React from "react";

export function Button({ type = "default", onClick, children }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}
