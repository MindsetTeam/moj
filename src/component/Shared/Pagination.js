import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

export default function Pagination(props) {
  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={props.changePageNum}
        containerClassName={"pagination " + styles.pagination}
        su
        bContainerClassName={"page pagination " + styles.paginationChild}
        activeClassName={"active " + styles.active}
        previousLabel="ថយក្រោយ <"
        nextLabel="> ទៅមុខ"
      />
    </div>
  );
}
