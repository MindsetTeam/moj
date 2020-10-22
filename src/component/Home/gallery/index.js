import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import styles from "./index.module.css";

import Paginate from "../../Shared/Pagination";
import Loading from "../../Shared/Loading";

import GalleryCard from "./galleryCard";

export default function () {
  const [totalPages, setTotalPages] = useState(0);
  const [galleryType, setGalleryType] = useState("all");
  const [galleryTypesData, setGalleryTypesData] = useState([]);
  const [order, setOrder] = useState("desc");
  const [galleriesData, setGalleriesData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/categories?_fields=id,name&parent=7"
    )
      .then((res) => res.json())
      .then((data) => {
        setGalleryTypesData([
          ...data,
          {
            id: "all",
            name: "ទាំងអស់",
          },
        ]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://demo.mcs.gov.kh/moj/wp-json/wp/v2/gallery?_fields=id,date,title,content,acf${
        searchInput
          ? `&search=${searchInput}`
          : `&categories=${isNaN(+galleryType) ? "" : galleryType}`
      }&order=${order}&per_page=6&page=${pageNum}`
    )
      .then((res) => {
        setTotalPages(res.headers.get("x-wp-totalpages"));
        return res.json();
      })
      .then((data) => {
        setGalleriesData(data);
        setLoading(false);
      });
  }, [order, pageNum, galleryType, searchInput]);

  const changePageNum = (num) => {
    setPageNum(num.selected + 1);
  };
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
            <form
              className="search"
              style={{ position: "relative" }}
              onSubmit={(e) => {
                e.preventDefault();
                setSearchInput(e.target.firstChild.value.trim());
              }}
            >
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
            <i
              className={"fa fa-chevron-down mx-2 " + styles.sortIcon}
              onClick={setOrder.bind(this, "desc")}
            ></i>
            <i
              className={"fa fa-chevron-up " + styles.sortIcon}
              onClick={setOrder.bind(this, "asc")}
            ></i>
          </div>
        </div>
        <div className={styles.category}>
          <div>
            {galleryTypesData.map((v) => {
              return (
                <p
                  onClick={setGalleryType.bind(this, v.id)}
                  style={{
                    cursor: "pointer",
                    borderRight: v.id.toString() === "all" ? "0" : "",
                  }}
                >
                  {v.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {/* End Header */}
      <div className={styles.contentBody}>
        {loading && <Loading></Loading>}
        {!loading && [
          <div className={styles.galleries + " m-0"}>
            {galleriesData.map((v, i) => {
              return <GalleryCard key={i} data={v} />;
            })}
          </div>,
          <Paginate pageCount={totalPages} changePageNum={changePageNum} />,
        ]}
      </div>
      {/* End Body */}
    </div>
  );
}
