import React, { useEffect, useState, useContext } from "react";
import "../home.css";
import "../main.css";
import Slider from "../../Shared/Slider";
import { useParams, Link } from "react-router-dom";
import Loading from "../../Shared/Loading";

import Activity1 from "../../../asset/activity1.png";
import Activity2 from "../../../asset/activity2.png";
import Activity3 from "../../../asset/activity3.png";
import Activity4 from "../../../asset/activity4.png";
import extractionHtml from "../../../utils/extractionHTML";
import truncateString from "../../../utils/truncateText";
import convertToKhmer from "../../../utils/convertToKhmer";
import NewsContext from "../../../context/newsTypes";
import { MergeTypeSharp } from "@material-ui/icons";

const convertISODatetoKhmer = (date) => {
  const dateKh = convertToKhmer.dateToKhmer(date);
  return `ថ្ងៃទី${dateKh.dateNum} ខែ${dateKh.month} ឆ្នាំ${dateKh.year}`;
};

export default function () {
  const newsTypesData = useContext(NewsContext);
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [relateNews, setRelateNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsTypes, setNewsTypes] = useState("");
  const [newsTypesArr, setNewsTypesArr] = useState([])
  const [announcementData, setAnnouncementData] = useState([]);

  useEffect(() => {
    fetch(
      "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/document?per_page=4&categories=18&_fields=id,title,acf"
    )
      .then((res) => res.json())
      .then((data) => setAnnouncementData(data));
  }, []);
  useEffect(() => {
    setLoading(true);
    fetch(
      "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/news/" +
        id +
        "?_fields=id,date,title,content,acf,categories"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        const newsTypesArrFilter= data?.categories.map(v=> newsTypesData.find(singleType=>singleType.id ===v));
        console.log(newsTypesArrFilter);
        const newstypes = newsTypesData.filter((v) =>
          data.categories.includes(v.id)
        )[0];
        setNewsTypesArr(newsTypesArrFilter);
        setNewsTypes(newstypes);
        setMainImage(data.acf.image.url);
        setNewsData(data);
        setLoading(false);
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
  }, [id, newsTypesData]);

  const renderCarousel = [];
  relateNews.forEach((v, i) => {
    renderCarousel.push(
      <Link
        key={`news-${i}`}
        to={`/news-event/${v.id}`}
        className={
          "col-md-4 " +
          (i !== 0 && i !== 3 ? " clearfix d-none d-md-block " : " pr-0 ") +
          (i == 1 || i == 4 ? " p-0 " : "") +
          (i == 2 || i == 5 ? " pl-0 " : "")
        }
      >
        <div
          className="card p-sm-3"
          style={
            i == 1 || i == 4
              ? {
                  border: 0,
                  borderRight: "7px solid #eeeeee",
                  borderLeft: "7px solid #eeeeee",
                }
              : { border: 0 }
          }
        >
          <img
            className="card-img-top img-fluid"
            src={v.acf.image.sizes["medium_large"]}
            alt="Card image cap"
            style={{ height: "160px" }}
            id="relatedNewsImageCustomized"
          />
          <div className="card-body">
            <p className="card-text">
              {v.title.rendered.substr(0, 86) + "..."}
            </p>
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
            <div className="title mb-1 p-1 px-2 pt-2 d-flex justify-content-between" style={{fontSize: "15px"}}>
              <p className="m-0">
                <span
                  className="fa fa-bullhorn pr-2"
                  style={{ borderRight: "3px solid red", fontSize: "1.3em" }}
                ></span>{" "}
                <Link to={`/news/all`} style={{ color: "inherit" }}>
                ព័ត៌មាននិងឯកសារ
                </Link>{" "}
                /{" "}
                {newsTypesArr.map((v,i)=>{
                return <>
                <Link
                to={{
                  pathname: `/news/${v?.slug}`,
                  state: { id: v?.id },
                }}
                style={{ color: "inherit" }}
              >
                {v?.name}
              </Link>
              {i=== newsTypesArr.length-1 || ' | '}
              </>
                })}
                {/* <Link
                  to={{
                    pathname: `/news/${newsTypes?.slug}`,
                    state: { id: newsTypes?.id },
                  }}
                  style={{ color: "inherit" }}
                >
                  {newsTypes?.name}
                </Link>{" "} */}
              </p>
              <p className="m-0 d-none d-sm-block">
                <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                {convertISODatetoKhmer(newsData?.date)}
              </p>
            </div>

            <div className="latest-news row">
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
                <div className="latest-news-info pt-0 pt-md-0 py-md-3 px-4">
                  <h1
                    className="latest-news-info-title text-danger"
                    style={{ fontSize: "1.4em" }}
                  >
                    {newsData?.title.rendered}
                  </h1>
                  <div className="latest-news-thumbnail pb-lg-3 pt-lg-2">
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
                </div>,
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
                </div>,
              ]}
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
                      <div className="carousel-item" style={{ height: "auto" }}>
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
              {announcementData.map((v, i) => (
                <div
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
                          objectFit: 'cover',
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
