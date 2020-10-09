import React from "react";
import "./home.css";
import "./main.css";

import Activity1 from "../../asset/activity1.png";
import Activity2 from "../../asset/activity2.png";
import Activity3 from "../../asset/activity3.png";
import Activity4 from "../../asset/activity4.png";
import Activity5 from "../../asset/activity5.png";
import Activity6 from "../../asset/activity6.png";

export default function index() {
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-lg-9">
          <div className="latest-news-container">
            <div className="title mb-1 p-1 px-2 pt-2">ព័ត៌មានថ្មីៗ</div>
            <div className="latest-news row">
              <div className="latest-news-info col-lg-7 pt-0 pt-md-0 pt-md-3 px-4">
                <h1 className="latest-news-info-title">
                  ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                  អញ្ជើញចូលរួមជាអធិបតីក្នុងពិធីប្រកាសតែងតាំង
                  និងចូលកាន់មុខតំណែងព្រះរាជអាជ្ញានៃអយ្យការអមសាលាដំបូងខេត្តកំពង់ចាម
                </h1>
                <p className=" latest-news-info-description">
                  នៅរសៀលថ្ងៃអង្គារ ៨កើត ខែស្រាពណ៍ ឆ្នាំជូត ទោស័ក ព.ស.២៥៦៤
                  ត្រូវនឹងថ្ងៃទី២៨ ខែកក្កដា ឆ្នាំ២០២០ នេះ ឯកឧត្តម កើត រិទ្ធ
                  រដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌បានអញ្ជើញជាអធិបតីដ៏ខ្ពង់ខ្ពស់
                </p>
                <p className="latest-news-info-date">
                  ថ្ងៃទី០៥ ខែមិថុនា ឆ្នាំ២០២០
                </p>
              </div>
              <div className="latest-news-thumbnail col-lg-5 p-0  pt-lg-2 pr-lg-2 ">
                <img
                  src="http://www.moj.gov.kh/files/user-folder/2020/07/028/002/002_280720_MOJ_KH.jpg"
                  alt=""
                  className="img-fluid"
                  style={{
                    paddingBottom: "0px !important",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="daily-news-container my-2">
            <div className="daily-news row px-3">
              <div className="each-daily-news col-12 py-4 px-2 m-0">
                <div
                  className="each-daily-news-thumbnail"
                  style={{
                    width: "30%",
                    height: "100%",
                  }}
                >
                  <img
                    src="http://www.moj.gov.kh/files/events/1595733428003_240720_MOJ_KH.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1 pl-2"
                  style={{ width: "65%" }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#">
                      ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                      អញ្ជើញចូលរួមជាអធិបតីក្នុងពិធីប្រកាសផ្ទេរ
                      និងចូលកាន់មុខតំណែង...
                    </a>
                  </h1>
                  <p className="each-daily-news-info-date pt-2">
                    ថ្ងៃទី២៦ ខែកក្កដា ឆ្នាំ២០២០
                  </p>
                </div>
              </div>
              <hr className="w-100 m-0 d-none d-md-block" />
              <div className="each-daily-news col-12 py-4 px-2 m-0">
                <div
                  className="each-daily-news-thumbnail"
                  style={{
                    width: "30%",
                    height: "100%",
                  }}
                >
                  <img
                    src="http://www.moj.gov.kh/files/events/1595733428003_240720_MOJ_KH.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1 pl-2"
                  style={{ width: "65%" }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#">
                      ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                      អញ្ជើញចូលរួមជាអធិបតីក្នុងពិធីប្រកាសផ្ទេរ
                      និងចូលកាន់មុខតំណែង...
                    </a>
                  </h1>
                  <p className="each-daily-news-info-date pt-2">
                    ថ្ងៃទី២៦ ខែកក្កដា ឆ្នាំ២០២០
                  </p>
                </div>
              </div>
              <hr className="w-100 m-0 d-none d-md-block" />
              <div className="each-daily-news col-12 py-4 px-2 m-0">
                <div
                  className="each-daily-news-thumbnail"
                  style={{
                    width: "30%",
                    height: "100%",
                  }}
                >
                  <img
                    src="http://www.moj.gov.kh/files/events/1595733428003_240720_MOJ_KH.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1 pl-2"
                  style={{ width: "65%" }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#">
                      ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                      អញ្ជើញចូលរួមជាអធិបតីក្នុងពិធីប្រកាសផ្ទេរ
                      និងចូលកាន់មុខតំណែង...
                    </a>
                  </h1>
                  <p className="each-daily-news-info-date pt-2">
                    ថ្ងៃទី២៦ ខែកក្កដា ឆ្នាំ២០២០
                  </p>
                </div>
              </div>
              <hr className="w-100 m-0 d-none d-md-block" />
              <div className="each-daily-news col-12 py-4 px-2 m-0">
                <div
                  className="each-daily-news-thumbnail"
                  style={{
                    width: "30%",
                    height: "100%",
                  }}
                >
                  <img
                    src="http://www.moj.gov.kh/files/events/1595733428003_240720_MOJ_KH.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  className="each-daily-news-info py-lg-1 pl-2"
                  style={{ width: "65%" }}
                >
                  <h1 className="each-daily-news-info-title">
                    <a href="#">
                      ឯកឧត្តមរដ្ឋមន្ត្រីក្រសួងយុត្តិធម៌
                      អញ្ជើញចូលរួមជាអធិបតីក្នុងពិធីប្រកាសផ្ទេរ
                      និងចូលកាន់មុខតំណែង...
                    </a>
                  </h1>
                  <p className="each-daily-news-info-date pt-2">
                    ថ្ងៃទី២៦ ខែកក្កដា ឆ្នាំ២០២០
                  </p>
                </div>
              </div>

              <div className="mx-auto">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        id="previouspage"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        7
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        8
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        9
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        id="nextpage"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
            className="activities-container "
            style={{ paddingBottom: "10px" }}
          >
            <div className="title mb-1 p-1 px-2 pt-2">
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
              <div className="activity">
                <a href="#">
                  <img src={Activity5} alt="" />
                  <p>ឯកសារបោះពុម្ភផ្សាយ</p>
                </a>
              </div>
              <div className="activity">
                <a href="#">
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
