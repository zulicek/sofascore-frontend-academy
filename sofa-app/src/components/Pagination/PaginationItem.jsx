import React from "react";

export class PaginationItem extends React.Component {
    render() {
      const { handlePageClick, disabled, text, icon } = this.props
  
      return (
        <button
            onClick={handlePageClick}
            disabled={disabled}
            className="page-item"
            aria-label={text}
          >
            <span aria-hidden="true">{icon}</span>
          </button>
      )
    }
  }