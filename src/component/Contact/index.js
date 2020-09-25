import React, { Component } from "react";
import "./index.css";

// Image
import Ministry from "../../asset/contact/ministry.jpg";
import Telegram from "../../asset/telegram.png";
import Facebook from "../../asset/facebook.png";
import Youtube from "../../asset/youtube.png";

export class index extends Component {
  render() {
    return (
      <div
        className="container-fluid my-2 pt-3 contact"
        style={{ background: "#FDEFC2" }}
      >
        <h4 className="text-danger font-weight-bolder">ទំនាក់ទំនងសាធារណៈ</h4>

        <div
          className="row align-items-center justify-content-center mx-1 "
          style={{ backgroundColor: "#fff" }}
        >
          <div className="col-md-6 contact-info">
            <div className="row ">
              <div className="col-sm-6 my-4">
                <h5>អាស័យដ្ឋាន</h5>
                <p>
                  មហាវិថីសម្តេចសុធារស ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា
                </p>
              </div>
              <div className="col-sm-6  my-4">
                <h5>លេខទូរស័ព្ទ</h5>
                <p>
                  (+855) 23 216 322
                  <br />
                  (+855) 23 217 841
                </p>
              </div>

              <div className="col-sm-6 my-4">
                <h5>គេហទំព័រ</h5>
                <p>www.moj.gov.kh</p>
              </div>
              <div className="col-sm-6 my-4">
                <h5>សារអេឡិចត្រូនិក</h5>
                <p>សារអេឡិចត្រូនិក info@moj.gov.kh</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-3">
            <img src={Ministry} className="img-fluid" />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <form action="">
              <input
                className="form-control form-control-lg"
                type="text"
                style={{ marginTop: "0px !important" }}
                placeholder="ឈ្មោះ"
              />
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="អីម៉ែល"
              />
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="លេខទូរស័ព្ទ"
              />
              <button
                type="button"
                className="btn  btn-light btn-lg btn-block font-weight-bolder"
                onClick={() => document.querySelector("#filePicker").click()}
              >
                បញ្ចូលរូបភាព ឬឯកសារ PDF
              </button>
              <input type="file" className="d-none" id="filePicker"></input>
              <textarea
                className="form-control"
                placeholder="មតិយោបល់"
                rows="5"
              ></textarea>
              <div className="text-center mb-3">
                <button
                  type="button"
                  className="btn  btn-light text-danger font-weight-bolder btn-lg w-50 "
                >
                  ផ្ញើមតិយោបល់
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6" style={{ marginTop: "20px" }}>
            <div className="row m-0">
              <div className="col-12 px-0" style={{ background: "#fff" }}>
                <div id="mapInfo" className="px-2 pt-2">
                  <iframe
                    frameborder="0"
                    style={{ width: "100%" }}
                    height="390"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4Scm2TVRCTERlYNzc7x2fvA&key=AIzaSyD4j2M6KG6VoR0XICDghaj8YkqCQuFan1s&zoom=16"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-12 col-sm-6 p-0 mb-2 mb-sm-0 w-100 mx-auto">
                <div className="social-media w-75 mx-auto pt-3 d-flex justify-content-around  ">
                  <img
                    src={Facebook}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <img
                    src={Youtube}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <img
                    src={Telegram}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
