import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={() => {}}
        containerClassName={"pagination " + styles.pagination}
        subContainerClassName={"page pagination " + styles.paginationChild}
        activeClassName={"active " + styles.active}
        previousLabel="ថយក្រោយ <"
        nextLabel="> ទៅមុខ"
      />
    </div>
  );
}
