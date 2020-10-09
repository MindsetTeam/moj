import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

import ReactPaginate from "react-paginate";

import GalleryCard from "./galleryCard";

// Import assets

export class index extends Component {
  render() {
    return (
      <div className={styles.galleryContainer + " m-0 my-2"}>
        <div className={styles.contentHeader}>
          <div className={styles.filter + " row"}>
            <div
              className="col-md-4 col-12"
              style={{ color: "#e53e3e", fontWeight: "bold" }}
            >
              <i class="fa fa-images mr-2"></i>
              បណ្ណាល័យរូបភាព
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <form className="search" style={{ position: "relative" }}>
                <input
                  type="text"
                  name="search"
                  className="searchbox w-100"
                  placeholder="ស្វែងរក"
                  style={{ borderRadius: "10px" }}
                />
                <button className="search-img"></button>
              </form>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              តំរៀបតាមលំដាប់
              <i className={"fa fa-chevron-down mx-2 " + styles.sortIcon}></i>
              <i className={"fa fa-chevron-up " + styles.sortIcon}></i>
            </div>
          </div>
          <div className={styles.category}>
            <div>
              <p>សនិ្នបាត</p>
              <p>សិក្ខាសាលា</p>
              <p>វគ្គបណ្ដុះបណ្ដាល</p>
              <p>កម្រងរូបភាពផ្សេងៗ</p>
              <p style={{ borderRight: "0" }}>ទាំងអស់</p>
            </div>
          </div>
        </div>
        {/* End Header */}
        <div className={styles.contentBody}>
          <div className={styles.galleries + " m-0"}>
            <GalleryCard title="hi1" id="1"></GalleryCard>
            <GalleryCard title="hi2" id="2"></GalleryCard>
            <GalleryCard title="hi3" id="3"></GalleryCard>
            <GalleryCard title="hi4" id="4"></GalleryCard>
            <GalleryCard title="hi5" id="5"></GalleryCard>
            <GalleryCard title="hi6" id="6"></GalleryCard>
          </div>
          <div className={styles.paginationContainer}>
            <ReactPaginate
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={20}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={() => {}}
              containerClassName={"pagination " + styles.pagination}
              subContainerClassName={
                "page pagination " + styles.paginationChild
              }
              activeClassName={"active " + styles.active}
              previousLabel="ថយក្រោយ <"
              nextLabel="> ទៅមុខ"
            />
          </div>
        </div>
        {/* End Body */}
      </div>
    );
  }
}

export default index;
