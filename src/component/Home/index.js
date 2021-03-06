import React, { Component } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import truncateString from "../../utils/truncateText";
import extractionHtml from "../../utils/extractionHTML";
import convertToKhmer from "../../utils/convertToKhmer";

// Import assets
import Activity1 from "../../asset/activity1.png";
import Activity2 from "../../asset/activity2.png";
import Activity3 from "../../asset/activity3.png";
import Activity4 from "../../asset/activity4.png";
import Activity5 from "../../asset/activity5.png";
import Activity6 from "../../asset/activity6.png";
import Facebook from "../../asset/facebook.png";
import Youtube from "../../asset/youtube.png";
import Telegram from "../../asset/telegram.png";

export class index extends Component {
  constructor(props) {
    super(props);
    this.marqueeRef = React.createRef();
    this.state = {
      featuredNews: [],
      latestNews: [],
    };
    this.titleNews = [];
  }
  async componentDidMount() {
    const featuredNews = await fetch(
      "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/news?_fields=id,date,acf,title&orderby=modified&featured_news=yes&per_page=18"
    ).then((res) => res.json());
    this.setState({ featuredNews });
    const latestNews = await fetch(
      "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/news?_fields=id,date,acf,title,content&per_page=5"
    ).then((res) => res.json());
    this.setState({ latestNews });
  }

  convertISODatetoKhmer(date) {
    const dateKh = convertToKhmer.dateToKhmer(date);
    return `ថ្ងៃទី${dateKh.dateNum} ខែ${dateKh.month} ឆ្នាំ${dateKh.year}`;
  }

  render() {
    return (
      <div>
        {/* Carousel */}
        <div
          id="carouselExampleIndicators"
          className={"carousel slide carousel-fade " + styles.carousel}
          data-ride="carousel"
          data-interval="3000"
        >
          <ol className={"carousel-indicators " + styles.carouselIndicators}>
            {this.state.featuredNews.map((v, i) => {
              this.titleNews.push({ id: v.id, title: v.title.rendered });
              return (
                <li
                key={i}
                  data-target="#carouselExampleIndicators"
                  data-slide-to={i}
                  className={i === 0 ? "active" : ""}
                ></li>
              );
            })}
          </ol>
          <div className="carousel-inner">
            {/* <div
              className={
                "carousel-item " +
                styles.carouselItem +
                " active " +
                styles.carouselItemActive
              }
          >
              <div className="row">
                <div
                  className={
                    "order-lg-1 order-2 " + styles.carouselLeftContainer
                  }
                >
                  <div className="m-4">
                    <h4 className={styles.newsTitle}>
                      ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                      អញ្ជើញជាអធិបតីក្នុងពិធីប្រកាសតែងតាំង
                      និងចូលកាន់មុខតំណែងប្រធានសាលាដំបូងខេត្តព្រៃវែង
                    </h4>
                    <p
                      className={
                        "px-1 px-md-2 mt-lg-4 " +
                        styles.carouselLeftContainerDate
                      }
                    >
                      ថ្ងៃទី៤ ខែសីហា ឆ្នាំ២០២០
                    </p>
                  </div>
                </div>
                <div
                  className={
                    "order-1 order-lg-2 carousel-img " + styles.carouselImg
                  }
                  style={{
                    backgroundImage:
                      "url(http://moj.gov.kh/files/user-folder/2020/08/004/002/017_040820_MOJ_KH.jpg)",
                  }}
                ></div>
              </div>
            </div> */}

            {this.state.featuredNews.map((v, i) => {
              return (
                <div
                key={i}
                  className={
                    "carousel-item " +
                    styles.carouselItem +
                    (i === 0 ? " active " + styles.carouselItemActive : "")
                  }
                >
                  <Link to={`/news-event/${v.id}`} className="row">
                    <div
                      className={
                        "order-lg-1 order-2 " + styles.carouselLeftContainer
                      }
                    >
                      <div className="m-4">
                        <h4 className={styles.newsTitle}>
                          {truncateString(v.title.rendered, 310)}
                        </h4>
                        <p
                          className={
                            "px-1 px-md-2 mt-lg-4 " +
                            styles.carouselLeftContainerDate
                          }
                        >
                          {this.convertISODatetoKhmer(v.date)}
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        "order-1 order-lg-2 carousel-img " + styles.carouselImg
                      }
                      style={{
                        backgroundImage: `url(${v.acf.image.url})`,
                      }}
                    ></div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Marquee */}
          <div className={styles.marquee}>
            <h3 className="px-2">សេចក្ដីជូនដំណឹង</h3>
            <marquee
              ref={this.marqueeRef}
              behavior="scroll"
              direction="left"
              onMouseOver={() => {
                this.marqueeRef.current.stop();
              }}
              onMouseOut={() => {
                this.marqueeRef.current.start();
              }}
            >
              {/* <a href="#">
                ក្នុងស្មារតីរួមចំណែកជាមួយរាជរដ្ឋាភិបាលក្នុងការប្រយុទ្ធប្រឆាំងនឹងជំងឺឆ្លងកូវីដ១៩
                (Covid-19)
              </a>
              */}
              {this.titleNews.map((v,i) => {
                return <Link key={i} to={`/news-event/${v.id}`}>{v.title}</Link>;
              })}
            </marquee>
          </div>
          <a
            className={
              "carousel-control-prev d-none " + styles.carouselControlPrev
            }
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className={
                "carousel-control-prev-icon " + styles.carouselControlPrevIcon
              }
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className={
              "carousel-control-next d-none " + styles.carouselControlNext
            }
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className={
                "carousel-control-next-icon " + styles.carouselControlNextIcon
              }
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* End Carousel */}

        {/* Section */}
        <div className="sections-container mt-2">
          {/* Left Section */}
          <div className={styles.leftSection}>
            {/* Minister Image */}
            <div className={"p-2 " + styles.ministerImgContainer}>
              <div className={styles.ministerImg}>
                <div
                  className={
                    "w-100 d-block text-center " + styles.ministerImgTitle
                  }
                >
                  <span>ឯកឧត្តម កើត រិទ្ធ រដ្ឋមន្រ្ដីក្រសួងយុត្តិធម៌</span>
                </div>
              </div>
            </div>

            {/* Left Section links */}
            <div
              className={
                "my-2 p-2 py-3 pl-4 " + styles.leftSectionLinksContainer
              }
            >
              <ul>
                <li>
                  <Link to="/">សកម្មភាពរដ្ឋមន្រ្ដី</Link>
                </li>
                <li>
                  <Link to="/">សកម្មភាពថ្នាក់ដឹកនាំ</Link>
                </li>
                <li>
                  <Link to="/">សុន្ទរកថារដ្ឋមន្រ្ដី</Link>
                </li>
                <li>
                  <Link to="/">សេចក្ដីប្រកាសព័ត៌មាន</Link>
                </li>
              </ul>
            </div>

            {/* Activities */}
            <div className={"mb-2 " + styles.activitiesContainer}>
              <div
                className={
                  "mb-1 p-1 px-2 pt-2 " + styles.activitiesContainerTitle
                }
              >
                សកម្មភាពរបស់ក្រសួងយុត្តិធម៌
              </div>
              <div className={styles.activities}>
                <div className={styles.activity}>
                  <Link to="/criminal-record">
                    <img src={Activity1} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        ពាក្យស្នើសុំព្រឺតិ្តបត្រ {"\n"}ថ្កោលទោស
                      </span>
                    </p>
                  </Link>
                </div>
                <div className={styles.activity}>
                  <Link to="/structure">
                    <img src={Activity2} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        រចនាសម្ព័ន្ធ{"\n"}ក្រសួង
                      </span>
                    </p>
                  </Link>
                </div>
                <div className={styles.activity}>
                  <Link
                    to={{
                      pathname: `/news/the-secretariat-of-the-capital-provincial-court-info`,
                      state: { id: 6 },
                    }}
                  >
                    <img src={Activity3} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        លេខាធិការដ្ឋានសាលា {"\n"}ដំបូងរាជធានី-ខេត្ត
                      </span>
                    </p>
                  </Link>
                </div>
                <div className={styles.activity}>
                  <Link to="/meeting">
                    <img src={Activity4} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        កម្មវិធីប្រជុំ {"\n"} ក្រសួងយុត្តិធម៌
                      </span>
                    </p>
                  </Link>
                </div>
                <div className={styles.activity}>
                  <Link to="/law-documents">
                    <img src={Activity5} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        ឯកសារ {"\n"}បោះពុម្ភផ្សាយ
                      </span>
                    </p>
                  </Link>
                </div>
                <div className={styles.activity}>
                  <Link to="/gallery">
                    <img src={Activity6} alt="" />
                    <p>
                      <span style={{ whiteSpace: "pre-line" }}>
                        បណ្ណាល័យ {"\n"}រូបភាព-វីដេអូ
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sections */}
          <div className={styles.rightSection}>
            {/* Latest news */}
            <div className={styles.latestNewsContainer}>
              <div
                className={
                  "mb-1 p-1 px-2 pt-2 " + styles.latestNewsContainerTitle
                }
              >
                ព័ត៌មានថ្មីៗ
              </div>
              <div className={"row " + styles.latestNews}>
                <div
                  className={
                    "col-lg-7 pt-0 pt-md-0 py-md-3 px-4 " +
                    styles.latestNewsInfo
                  }
                >
                  <Link to={`/news-event/${this.state.latestNews[0]?.id}`}>
                    <h1 className={styles.latestNewsInfoTitle}>
                      {this.state.latestNews[0]?.title.rendered}
                    </h1>
                  </Link>
                  <p
                    className={
                      "d-none d-lg-block " + styles.latestNewsInfoDescription
                    }
                  >
                    {truncateString(
                      extractionHtml(
                        this.state.latestNews[0]?.content.rendered
                      ).pValue.join("\n"),
                      270
                    )}
                    <span>
                      <Link
                        to={`/news-event/${this.state.latestNews[0]?.id}`}
                        style={{ color: "#e53e3e" }}
                      >
                        {" "}
                        អានបន្ត...
                      </Link>
                    </span>
                  </p>
                  <p className={styles.latestNewsInfoDate}>
                    {this.convertISODatetoKhmer(this.state.latestNews[0]?.date)}
                  </p>
                </div>
                <div
                  className={
                    "col-lg-5 p-0 pb-lg-3 pt-lg-2 pr-lg-2 " +
                    styles.latestNewsThumbnail
                  }
                >
                  <div
                    style={{
                      backgroundImage: `url(${this.state.latestNews[0]?.acf.image.url})`,
                    }}
                    className="py-1"
                  ></div>
                </div>
              </div>
            </div>

            {/* Daily news */}
            <div className={"my-2 " + styles.dailyNewsContainer}>
              <div
                className={
                  "mb-1 p-1 px-2 pt-2 " + styles.dailyNewsContainerTitle
                }
              >
                ព័ត៌មានប្រចាំថ្ងៃ
                <span className="more">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    to={`/news/all`}
                  >
                    ច្រើនទៀត...
                  </Link>
                </span>
              </div>
              <div className={"row px-3 " + styles.dailyNews}>
                {this.state.latestNews.slice(1).map((v, i) => {
                  return (
                    <React.Fragment 
                    key={i}
                    >
                      <div
                        className={
                          "col-md-6 col-12 py-4 px-2 m-0 " +
                          styles.eachDailyNews
                        }
                      >
                        <div style={{ width: "40%", height: "100%" }}>
                          <img
                            src={v.acf.image.url}
                            alt=""
                            style={{
                              objectFit: 'cover',
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div
                          className={"py-lg-1 pl-2 " + styles.eachDailyNewsInfo}
                          style={{ width: "60%" }}
                        >
                          <h1 className={styles.eachDailyNewsInfoTitle}>
                            <Link to={`/news-event/${v.id}`}>
                              {truncateString(v.title.rendered, 119)}
                            </Link>
                          </h1>
                          <p className={styles.eachDailyNewsInfoDate}>
                            {this.convertISODatetoKhmer(v.date)}
                          </p>
                        </div>
                      </div>

                      {i === 1 ? (
                        <hr className="w-100 m-0 d-none d-md-block" />
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            {/* Annoucements */}
            <div className={"mb-2 " + styles.annoucementsContainer}>
              <div
                className={
                  "mb-1 p-1 px-2 pt-2 " + styles.annoucementsContainerTitle
                }
              >
                សេចក្ដីជូនដំណឹង
                <span className="more">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    to="/law-documents"
                  >
                    ច្រើនទៀត...
                  </Link>
                </span>
              </div>
              <div className={"row px-3 " + styles.announcements}>
                <div className={"col-md-6 col-12 py-4 " + styles.announcement}>
                  <div style={{ marginTop: "-2px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#e53e3e"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-1">
                    <Link to="/">
                      សារថ្វាយព្រះពរ របស់ថ្នាក់ដឹកនាំ និងមន្ត្រី នៃសាលាឧទ្ធរណ៍
                      និងមហាអយ្យការអមសាលាឧទ្ធរណ៍ព្រះសីហនុ​
                      ក្រាបបង្គំទូលថ្វាយសម្តេចព្រះមហាក្សត្រី....
                    </Link>
                  </div>
                </div>
                <div className={"col-md-6 col-12 py-4 " + styles.announcement}>
                  <div style={{ marginTop: "-2px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#e53e3e"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-1">
                    <Link to="/">
                      សារលិខិតចូលរួមរំលែកទុក្ខរបស់ឯកឧត្តមរដ្ឋមន្រ្តី
                      ក្រសួងយុត្តិធម៌ ជូនចំពោះ លោកជំទាវ សួស ណារ៉ា ហ៊ឹម ឆែម
                      ព្រមទាំងក្រុមគ្រួសារ
                    </Link>
                  </div>
                </div>
                <hr className="w-100 m-0 d-none d-md-block" />
                <div className={"col-md-6 col-12 py-4 " + styles.announcement}>
                  <div style={{ marginTop: "-2px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#e53e3e"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-1">
                    <Link to="/">
                      សេចក្តីប្រកាសព័ត៌មានរបស់អ្នកនាំពាក្យរបស់ អយ្យការ
                      អមសាលាដំបូងខេត្តស្វាយ រៀង បំភ្លឹអំពីការចុះផ្សាយរបស់
                      គេហទំព័រព័ត៌មាន...
                    </Link>
                  </div>
                </div>
                <div className={"col-md-6 col-12 py-4 " + styles.announcement}>
                  <div style={{ marginTop: "-2px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#e53e3e"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-1">
                    <Link to="/">
                      សេចក្តីជូនដំណឹងរបស់ក្រសួងយុត្តិធម៌
                      ស្តីពីកម្មវិធីប្រកាសបើកយុទ្ធនាការដោះស្រាយការកកស្ទះសំណុំរឿងនៅតាមសាលាដំបូងរាជធានី-ខេត្ត
                      ...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="btm-section mb-3" style={{ clear: "both" }}>
            {/* Bottom Left */}
            <div
              className={
                styles.leftSection + " mb-2 mb-sm-2 " + styles.btmLeftSection
              }
            >
              <div>
                <div
                  className={
                    "p-1 px-2 pt-2 mb-2 " + styles.subUnitsContainerTitle
                  }
                >
                  អង្គភាពក្រោមឱវាទ
                </div>
                <div className={"mt-1 pl-4 " + styles.subUnits}>
                  <div className="pr-2">
                    <img
                      src="http://moj.gov.kh/files/link_images/1561435465rajp.png"
                      alt=""
                      style={{ height: "70px" }}
                    />
                  </div>
                  <div className="mt-3">
                    <Link
                      style={{
                        color: "#000",
                        textDecoration: "none",
                      }}
                    >
                      <p>រាជបណ្ឌិតសភាវិជ្ជាជីវះតុលាការ</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right */}
            <div
              className={
                styles.rightSection + " mb-2 mb-sm-2 " + styles.btmRightSection
              }
            >
              <div className="row m-0">
                <div
                  className={
                    "col-12 col-sm-6 p-0 mb-2 mb-sm-0 " +
                    styles.socialMediaContainer
                  }
                >
                  <div
                    className={
                      "p-1 pl-2 mb-2 pt-2 " + styles.btmRightSectionTitle
                    }
                  >
                    បណ្ដាញសង្គម
                  </div>
                  <div className={"pt-3 " + styles.socialMedia}>
                    <img
                      src={Facebook}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "20px",
                      }}
                    />
                    <img
                      src={Youtube}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "20px",
                      }}
                    />
                    <img
                      src={Telegram}
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                  </div>
                </div>
                <div
                  className={"col-12 col-sm-6 p-0 " + styles.contactContainer}
                >
                  <div
                    className={
                      "p-1 pl-2 mb-2 pt-2 " + styles.btmRightSectionTitle
                    }
                  >
                    ទំនាក់ទំនង
                  </div>
                  <div className="contact p-2 pt-2">
                    <p className="m-0">
                      លេខទូរស័ព្ទ : (+855) 23 216 322 , (+855) 23 217 841{" "}
                    </p>
                    <p>
                      សារអេឡិចត្រូនិច : info@moj.gov.kh{" "}
                      <Link style={{ color: "red" }}>| លម្អិត...</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section */}
      </div>
    );
  }
}

export default index;
