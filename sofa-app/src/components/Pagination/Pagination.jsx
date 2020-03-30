import React from "react";
import { PaginationItem } from "./PaginationItem";
import "./Pagination.scss";

export class Pagination extends React.Component {
  render() {
    const { page, handlePageClick, totalElements, perPage } = this.props;

    return (
      <div className="pagination">
        <PaginationItem
          handlePageClick={() => handlePageClick(page - 1)}
          disabled={page <= 1}
          type="Previous"
          icon="«"
        />

        <span className="page-item">
          {this.props.page} / {Math.ceil(totalElements / perPage)}
        </span>

        <PaginationItem
          handlePageClick={() => handlePageClick(page + 1)}
          disabled={page >= Math.ceil(totalElements / perPage)}
          text="Next"
          icon="»"
        />
      </div>
    );
  }
}
