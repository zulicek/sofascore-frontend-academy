import React from "react";

export class PaginationItem extends React.Component {
    render() {
      const { handlePageClick, pageChange, disabled, text, icon } = this.props
  
      return (
        <button
            onClick={() => handlePageClick(pageChange)}
            disabled={disabled}
            className="page-link"
            aria-label={text}
          >
            <span aria-hidden="true">{icon}</span>
          </button>
      )
    }
  }