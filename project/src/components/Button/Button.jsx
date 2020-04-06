import React from "react";

export function Button({ type = "default", onClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      Login
    </button>
  );
}
