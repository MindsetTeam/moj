import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import "../../News/home.css";
import "../../News/main.css";
import { useParams, Link } from "react-router-dom";
import Loading from "../../Shared/Loading";

import Activity1 from "../../../asset/activity1.png";
import Activity2 from "../../../asset/activity2.png";
import Activity3 from "../../../asset/activity3.png";
import Activity4 from "../../../asset/activity4.png";
import convertToKhmer from "../../../utils/convertToKhmer";

const convertISODatetoKhmer = (date) => {
  const dateKh = convertToKhmer.dateToKhmer(date);
  return `ថ្ងៃទី${dateKh.dateNum} ខែ${dateKh.month} ឆ្នាំ${dateKh.year}`;
};

export default function () {
  const containerPdf = useRef(null);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([containerPdf.current.offsetWidth]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [lawDocData, setLawDocData] = useState({});
  const [announcementData, setAnnouncementData] = useState([]);

  const [widthContainerPdf] = useWindowSize();

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://demo.mcs.gov.kh/moj/wp-json/wp/v2/document/${id}?_fields=title,date,acf`
    )
      .then((res) => res.json())
      .then((data) => {
        setLawDocData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/document?per_page=4&categories=18&_fields=id,title,acf"
    )
      .then((res) => res.json())
      .then((data) => setAnnouncementData(data));
  }, []);

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-lg-9">
          <div className="latest-news-container" ref={containerPdf}>
            <div className="title mb-1 p-1 px-2 pt-2 d-flex justify-content-between">
              <p className="m-0">
                <span
                  className="fa fa-file pr-2"
                  style={{ borderRight: "3px solid red", fontSize: "1.3em" }}
                ></span>{" "}
                <Link to={`/law-documents`} style={{ color: "inherit" }}>
                  ឯកសារទាំងអស់
                </Link>
              </p>
              <p className="m-0 d-none d-sm-block">
                <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                {convertISODatetoKhmer(lawDocData?.date)}
              </p>
            </div>

            <div className="latest-news row mb-3">
              {loading && (
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Loading></Loading>
                </div>
              )}
              {!loading && [
                <div className="latest-news-info pt-0 pt-md-3 pb-md-0">
                  <h1
                    className="latest-news-info-title text-danger px-4"
                    style={{ fontSize: "1.4em" }}
                  >
                    {lawDocData?.title.rendered}
                  </h1>
                  <div className="  pt-lg-2 ">
                    {lawDocData?.acf["khmer_file"] ? (
                      <iframe
                        src={`https://docs.google.com/gview?url=${lawDocData?.acf["khmer_file"].url}&embedded=true`}
                        style={{
                          width: `${(widthContainerPdf || 800) + 20}px`,
                          height: "80vh",
                        }}
                        frameBorder="0"
                      ></iframe>
                    ) : (
                      ""
                    )}

                    {lawDocData?.acf["english_file"] ? (
                      <React.Fragment>
                        <p class="pl-4">ឯកសារភាសាអង់គ្លេស</p>
                        <iframe
                          src={`https://docs.google.com/gview?url=${lawDocData?.acf["english_file"].url}&embedded=true`}
                          style={{
                            width: `${(widthContainerPdf || 800) + 20}px`,
                            height: "80vh",
                          }}
                          frameBorder="0"
                        ></iframe>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </div>
                </div>,
              ]}
            </div>
          </div>
        </div>

        <div className="col-lg-3 pl-lg-0">
          <div className="daily-news-container">
            <div className="title mb-1 p-1 px-2 pt-2 ">
              {/* <div className="title mb-1 p-1 px-2 pt-2 borderRed"> */}
              សេចក្ដីជូនដំណឹង
            </div>
            <div className="daily-news row">
              {announcementData.map((v, i) => (
                <div
                  key={v.id}
                  className="each-daily-news col-12 mb-2"
                  style={{
                    borderBottom:
                      i == announcementData.length - 1
                        ? ""
                        : "2px solid #eeeeee",
                  }}
                >
                  <div
                    className="each-daily-news-thumbnail m-2"
                    style={{ width: "35%", height: "100%" }}
                  >
                    <Link to={`/law-documents/${v.id}`}>
                      <img
                        className="p-2 "
                        src={v.acf.featured_image_announcement.url}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          boxShadow: "4px 4px 4px -5px rgba(214, 214, 214, 1)",
                        }}
                      />
                    </Link>
                  </div>
                  <div
                    className="each-daily-news-info py-lg-1"
                    style={{ width: "70%" }}
                  >
                    <Link to={`/law-documents/${v.id}`}>
                      <h1 className="each-daily-news-info-title">
                        <a href="#">{v.title.rendered.slice(0, 131) + "..."}</a>
                      </h1>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="activities-container"
            style={{ paddingBottom: "10px" }}
          >
            <div className="title my-1 p-1 px-2 pt-2  text-danger">
              {/* <div className="title my-1 p-1 px-2 pt-2 borderRed text-danger"> */}
              សកម្មភាពរបស់ក្រសួងយុត្តិធម៌
            </div>
            <div className="activities">
              <div className="activity">
                <a href="#">
                  <img src={Activity1} alt="" />
                  <p>ពាក្យស្នើសុំព្រឺតិ្តបត្រថ្កោលទោស</p>
                </a>
              </div>
              <div className="activity">
                <a href="#">
                  <img src={Activity2} alt="" />
                  <p>យុទ្ធការដោះស្រាយការកកស្ទះសំណុំរឿង</p>
                </a>
              </div>
              <div className="activity">
                <a href="#">
                  <img src={Activity3} alt="" />
                  <p>លេខាធិការដ្ឋានសាលាដំបូងរាជធានី-ខេត្ត</p>
                </a>
              </div>
              <div className="activity">
                <a href="#">
                  <img src={Activity4} alt="" />
                  <p>កាលវិភាគប្រជុំរបស់ក្រសួងយុត្តិធម៌</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
