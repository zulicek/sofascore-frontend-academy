import React from "react";

export class Loader extends React.Component {
  render() {
    return (
      <div className="spinner-wrapper">
        <img src="spinner.svg" />
      </div>
    );
  }
}
