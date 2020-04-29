import React from "react";
import "./Loader.scss";

export class Loader extends React.Component {
  render() {
    return (
      <div className="spinner-wrapper">
        <div className="loader">
          <div className="ball"></div>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
}
