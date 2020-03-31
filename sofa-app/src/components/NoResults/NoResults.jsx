import React from "react";
import "./NoResults.scss";

export class NoResults extends React.Component {
  render() {
    const { text } = this.props;
    return <p className="no-results">{text}</p>;
  }
}
