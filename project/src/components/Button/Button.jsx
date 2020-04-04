import React from "react";

export function Button({ type, onClick }) {
  return (
    <button className={`btn btn-${type ? type : "default"}`} onClick={onClick}>
      Login
    </button>
  );
}
