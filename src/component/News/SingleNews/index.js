import React, { useEffect, useState } from "react";
import "../home.css";
import "../main.css";
import Slider from "../../Shared/Slider";
import { useParams, Link } from "react-router-dom";

import Activity1 from "../../../asset/activity1.png";
import Activity2 from "../../../asset/activity2.png";
import Activity3 from "../../../asset/activity3.png";
import Activity4 from "../../../asset/activity4.png";
import extractionHtml from "../../../utils/extractionHTML";
import truncateString from "../../../utils/truncateText";
import convertToKhmer from "../../../utils/convertToKhmer";

const convertISODatetoKhmer = (date) => {
  const dateKh = convertToKhmer.dateToKhmer(date);
  return `ថ្ងៃទី${dateKh.dateNum} ខែ${dateKh.month} ឆ្នាំ${dateKh.year}`;
};

export default function () {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [relateNews, setRelateNews] = useState([]);
  useEffect(() => {
    fetch(
      "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/news/" +
        id +
        "?_fields=id,date,title,content,acf"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMainImage(data.acf.image.url);
        setNewsData(data);
        fetch(
          "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/news?_fields=id,title,acf&before=" +
            data.date +
            "&per_page=6"
        )
          .then((res) => res.json())
          .then((data) => {
            setRelateNews(data);
          });
      });
  }, [id]);

  const renderCarousel = [];
  relateNews.forEach((v, i) => {
    renderCarousel.push(
      <Link
        to={`/news-event/${v.id}`}
        className={
          "col-md-4 pr-0" + (i !== 0 && i !== 3 ? " d-none d-md-block" : "")
        }
      >
        <div className="card p-sm-3" style={{ border: 0 }}>
          <img
            className="card-img-top"
            src={v.acf.image.sizes.medium}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">{truncateString(v.title.rendered, 180)}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-lg-9">
          <div className="latest-news-container">
            <div className="title mb-1 p-1 px-2 pt-2 d-flex justify-content-between">
              <p className="m-0">
                <span
                  className="fa fa-bullhorn pr-2"
                  style={{ borderRight: "3px solid red", fontSize: "1.3em" }}
                ></span>{" "}
                ព័ត៌មានរដ្ឋមន្ត្រី / ព័ត៌មានថ្មី
              </p>
              <p className="m-0 d-none d-sm-block">
                <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                {convertISODatetoKhmer(newsData?.date)}
              </p>
            </div>

            <div className="latest-news row">
              <div className="latest-news-info pt-0 pt-md-0 py-md-3 px-4">
                <h1
                  className="latest-news-info-title text-danger"
                  style={{ fontSize: "1.4em" }}
                >
                  {newsData?.title.rendered}
                </h1>
                <div className="latest-news-thumbnail pb-lg-3 pt-lg-2">
                  {/* <div className="pb-lg-3 pt-lg-2"> */}
                  {/* <div
                    style={{
                      backgroundImage: `url(${mainImage})`,
                      width: "100%",
                      height: "400px",
                    }}
                    className="py-1"
                  ></div> */}
                  <img
                    src={mainImage}
                    className="img-fluid py-1"
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  className="latest-news-info-description pt-2 pt-sm-0"
                  dangerouslySetInnerHTML={
                    extractionHtml(newsData?.content.rendered).pTag
                  }
                ></div>

                <div className="row">
                  {/* <Slider /> */}
                  {/* <div className="col-4 p-1">
                    <img
                      src="http://moj.gov.kh/files/user-folder/2020/07/022/001/017_220720_MOJ_KH.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-4 p-1">
                    <img
                      src="http://moj.gov.kh/files/user-folder/2020/07/022/001/017_220720_MOJ_KH.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-4 p-1">
                    <img
                      src="http://moj.gov.kh/files/user-folder/2020/07/022/001/017_220720_MOJ_KH.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="container bg-white">
              <Slider
                imgs={[
                  newsData?.acf.image.url,
                  ...extractionHtml(newsData?.content.rendered).imgTag,
                ]}
                changeImage={(v) => {
                  setMainImage(v);
                }}
              ></Slider>
            </div>
          </div>

          <div className="daily-news-container my-2">
            <div className="title mb-1 p-1 px-2 pt-2">
              <div className="d-flex justify-content-between">
                <p className="m-0">
                  <span
                    className="fa fa-print pr-2"
                    style={{ borderRight: "3px solid red", fontSize: "1.3em" }}
                  ></span>{" "}
                  ព័ត៌មានទាក់ទង
                </p>

                <div className="controls-top">
                  <a
                    className="btn-floating text-danger"
                    href="#multi-item-example"
                    data-slide="prev"
                  >
                    <i className="fa fa-chevron-left"></i>
                  </a>
                  <a
                    className="btn-floating text-danger"
                    href="#multi-item-example"
                    data-slide="next"
                  >
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="daily-news row">
              <div className="each-daily-news col-12">
                <div
                  id="multi-item-example"
                  className="carousel slide carousel-multi-item mt-0"
                  data-ride="carousel"
                  data-interval="8000"
                >
                  <div className="carousel-inner" role="listbox">
                    <div
                      className="carousel-item active"
                      style={{ height: "auto" }}
                    >
                      <div className="row">{renderCarousel.slice(0, 3)}</div>
                    </div>

                    {renderCarousel.length >= 4 ? (
                      <div
                        className="carousel-item active"
                        style={{ height: "auto" }}
                      >
                        <div className="row">{renderCarousel.slice(3)}</div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
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
              <div
                className="each-daily-news col-12 mb-2"
                style={{ borderBottom: "2px solid #eeeeee" }}
              >
                <div
                  className="each-daily-news-thumbnail m-2"
                  style={{ width: "35%", height: "100%" }}
                >
                  <img
                    className="p-2 "
                    src="http://www.moj.gov.kh/files/announcements/1597291724photo_2020-08-13_10-49-05.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "7px 7px 7px -5px rgba(214, 214, 214, 1)",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1"
                  style={{ width: "70%" }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#">
                      ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយ
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សី...
                    </a>
                  </h1>
                </div>
              </div>

              <div
                className="each-daily-news col-12 mb-2"
                style={{ borderBottom: "2px solid #eeeeee" }}
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
                      boxShadow: "7px 7px 7px -5px rgba(214, 214, 214, 1)",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1"
                  style={{ width: "70%" }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#">
                      ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយ
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សី...
                    </a>
                  </h1>
                </div>
              </div>

              <div
                className="each-daily-news col-12 mb-2"
                style={{ borderBottom: "2px solid #eeeeee" }}
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
                      boxShadow: "7px 7px 7px -5px rgba(214, 214, 214, 1)",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1"
                  style={{ width: "70%" }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#">
                      ឯកឧត្តមរដ្ឋមន្រ្តី​ក្រសួងយុត្តិធម៌ និង​ជាអនុប្រធានទី១
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយ
                      នៃក្រុមការងារថ្នាក់ជាតិចុះជួយស្រុកមោងឬស្សី...
                    </a>
                  </h1>
                </div>
              </div>

              <div className="each-daily-news col-12 mb-2">
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
                      boxShadow: "7px 7px 7px -5px rgba(214, 214, 214, 1)",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1"
                  style={{ width: "70%" }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#">
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
