import React from "react";
import "./Loader.scss";

export class Loader extends React.Component {
  render() {
    return (
      <div className="spinner-wrapper">
        <img src="spinner.svg" />
      </div>
    );
  }
}
