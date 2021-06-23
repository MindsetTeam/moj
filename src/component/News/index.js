import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./home.css";
import "./main.css";

import Paginate from "../Shared/Pagination";
import Loading from "../Shared/Loading";
import extractionHtml from "../../utils/extractionHTML";
import truncateString from "../../utils/truncateText";
import convertToKhmer from "../../utils/convertToKhmer";

import Activity1 from "../../asset/activity1.png";
import Activity2 from "../../asset/activity2.png";
import Activity3 from "../../asset/activity3.png";
import Activity4 from "../../asset/activity4.png";
import Activity5 from "../../asset/activity5.png";
import Activity6 from "../../asset/activity6.png";

const convertISODatetoKhmer = (date) => {
  const dateKh = convertToKhmer.dateToKhmer(date);
  return `ថ្ងៃទី${dateKh.dateNum} ខែ${dateKh.month} ឆ្នាំ${dateKh.year}`;
};

export default function (props) {
  const { types } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  let location = useLocation();
  useEffect(() => {
    setLoading(true);
    fetch(
      `http://demo.mcs.gov.kh/moj/wp-json/wp/v2/news?_fields=id,date,title,content,acf${
        types === "all" ? "" : `&categories=${location.state.id}`
      }&per_page=5&page=` + pageNum
    )
      .then((res) => {
        let totalPage = res.headers.get("x-wp-totalpages");
        setTotalPage(totalPage);
        return res.json();
      })
      .then((news) => {
        setNews(news);
        console.log(news);
        setLoading(false);
      });
  }, [pageNum, location, types]);
  const changePageNum = (num) => {
    setPageNum(num.selected + 1);
  };
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-lg-9">
          <div className="latest-news-container">
            <div className="title mb-1 p-1 px-2 pt-2">ព័ត៌មាននិង​ឯកសារ</div>
            {loading ? (
              <Loading />
            ) : !(news.length > 0) ? (
              <h1>News not inserted</h1>
            ) : (
              <Link to={`/news-event/${news[0].id}`}>
                <div className="latest-news row">
                  <div className="latest-news-info col-lg-7 pt-0 pt-md-0 pt-md-3 px-4">
                    <h1 className="latest-news-info-title">
                      {truncateString(news[0].title.rendered, 190)}
                    </h1>
                    <p className=" latest-news-info-description">
                      {truncateString(
                        extractionHtml(news[0].content.rendered).pValue[0],
                        290
                      )}
                    </p>
                    <p className="latest-news-info-date">
                      {convertISODatetoKhmer(news[0].date)}
                    </p>
                  </div>
                  <div className="latest-news-thumbnail col-lg-5 p-0  pt-lg-2 pr-lg-2 ">
                    <img
                      src={news[0].acf.image.sizes["large"]}
                      alt=""
                      className="img-fluid"
                      style={{
                        paddingBottom: "0px",
                      }}
                    />
                  </div>
                </div>
              </Link>
            )}
          </div>
          <div className="daily-news-container my-2">
            <div className="daily-news row px-3">
              {news.length <= 1 || loading
                ? null
                : news.slice(1).map((v) => (
                    <React.Fragment>
                      <Link to={`/news-event/${v.id}`}>
                        <div className="each-daily-news col-12 py-4 px-2 m-0">
                          <div
                            className="each-daily-news-thumbnail"
                            style={{
                              width: "30%",
                              height: "100%",
                            }}
                          >
                            <img
                            alt=""
                              src={v.acf.image.sizes.medium}
                              className="img-fluid"
                              style={{
                                width: "100%",
                                maxHeight: "170px",
                              }}
                            />
                          </div>
                          <div
                            className="each-daily-news-info py-lg-1 pl-2"
                            style={{ width: "65%" }}
                          >
                            <h1 className="each-daily-news-info-title">
                              <a href="#foo">
                                {truncateString(v.title.rendered, 470)}
                              </a>
                            </h1>
                            <p className="each-daily-news-info-date pt-2">
                              {convertISODatetoKhmer(v.date)}
                            </p>
                          </div>
                        </div>
                      </Link>
                      <hr className="w-100 m-0 d-none d-md-block" />
                    </React.Fragment>
                  ))}
              <div className="mx-auto">
                <Paginate
                  pageCount={+totalPage}
                  changePageNum={changePageNum}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 pl-lg-0">
          <div className="daily-news-container">
            <div className="title mb-1 p-1 px-2 pt-2">សេចក្ដីជូនដំណឹង</div>
            <div className=" daily-news row">
              <div
                className="each-daily-news col-12 mb-2"
                style={{
                  borderBottom: "2px solid  #EEEEEE",
                }}
              >
                <div
                  className="each-daily-news-thumbnail m-2"
                  style={{ width: "35%", height: "100%" }}
                >
                  <img
                    className="p-2"
                    src="http://www.moj.gov.kh/files/announcements/1597291724photo_2020-08-13_10-49-05.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "7px 7px 7px -5px rgba(214,214,214,1)",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1 "
                  style={{
                    width: "70%",
                  }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#foo">
                      ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយ
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សី...
                    </a>
                  </h1>
                </div>
              </div>

              <div
                className="each-daily-news col-12 mb-2"
                style={{
                  borderBottom: "2px solid  #EEEEEE",
                }}
              >
                <div
                  className="each-daily-news-thumbnail m-2"
                  style={{ width: "35%", height: "100%" }}
                >
                  <img
                    className="p-2"
                    src="http://www.moj.gov.kh/files/announcements/1597291724photo_2020-08-13_10-49-05.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "7px 7px 7px -5px rgba(214,214,214,1)",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1 "
                  style={{
                    width: "70%",
                  }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#foo">
                      ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយ
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សី...
                    </a>
                  </h1>
                </div>
              </div>
              <div
                className="each-daily-news col-12 mb-2"
                style={{
                  borderBottom: "2px solid  #EEEEEE",
                }}
              >
                <div
                  className="each-daily-news-thumbnail m-2"
                  style={{ width: "35%", height: "100%" }}
                >
                  <img
                    className="p-2"
                    src="http://www.moj.gov.kh/files/announcements/1597291724photo_2020-08-13_10-49-05.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "7px 7px 7px -5px rgba(214,214,214,1)",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1 "
                  style={{
                    width: "70%",
                  }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#foo">
                      ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយ
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សី...
                    </a>
                  </h1>
                </div>
              </div>
              <div
                className="each-daily-news col-12 mb-2"
                style={{
                  borderBottom: "2px solid  #EEEEEE",
                }}
              >
                <div
                  className="each-daily-news-thumbnail m-2"
                  style={{ width: "35%", height: "100%" }}
                >
                  <img
                    className="p-2"
                    src="http://www.moj.gov.kh/files/announcements/1597291724photo_2020-08-13_10-49-05.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "7px 7px 7px -5px rgba(214,214,214,1)",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1 "
                  style={{
                    width: "70%",
                  }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#foo">
                      ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយ
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សី...
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div
            className="activities-container "
            style={{ paddingBottom: "10px" }}
          >
            <div className="title mb-1 p-1 px-2 pt-2">
              សកម្មភាពរបស់ក្រសួងយុត្តិធម៌
            </div>
            <div className="activities">
              <div className="activity">
                <a href="#foo">
                  <img src={Activity1} alt="" />
                  <p>ពាក្យស្នើសុំព្រឺតិ្តបត្រថ្កោលទោស</p>
                </a>
              </div>
              <div className="activity">
                <a href="#foo">
                  <img src={Activity2} alt="" />
                  <p>យុទ្ធការដោះស្រាយការកកស្ទះសំណុំរឿង</p>
                </a>
              </div>
              <div className="activity">
                <a href="#foo">
                  <img src={Activity3} alt="" />
                  <p>លេខាធិការដ្ឋានសាលាដំបូងរាជធានី-ខេត្ត</p>
                </a>
              </div>
              <div className="activity">
                <a href="#foo">
                  <img src={Activity4} alt="" />
                  <p>កាលវិភាគប្រជុំរបស់ក្រសួងយុត្តិធម៌</p>
                </a>
              </div>
              <div className="activity">
                <a href="#foo">
                  <img src={Activity5} alt="" />
                  <p>ឯកសារបោះពុម្ភផ្សាយ</p>
                </a>
              </div>
              <div className="activity">
                <a href="#foo">
                  <img src={Activity6} alt="" />
                  <p>បណ្ណាល័យរូបភាព-វីដេអូ</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
