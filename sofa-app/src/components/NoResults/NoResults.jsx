import React from "react";

export class NoResults extends React.Component {
  render() {
    return (
      <p className="no-results">
        No results containing your search term were found.
      </p>
    );
  }
}
