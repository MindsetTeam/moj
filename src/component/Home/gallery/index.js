import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

import GalleryCard from "./galleryCard";

// Import assets
import Facebook from "../../../asset/facebook.png";
import Youtube from "../../../asset/youtube.png";
import Telegram from "../../../asset/telegram.png";

export class index extends Component {
  render() {
    return (
      <div className={styles.galleryContainer + " mb-2"}>
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
              <i
                className="fa fa-chevron-down  mx-2"
                style={{
                  color: "#fff",
                  backgroundColor: "#e53e3e",
                  padding: 5,
                  borderRadius: 20,
                }}
              ></i>
              <i
                className="fa fa-chevron-up"
                style={{
                  color: "#fff",
                  backgroundColor: "#e53e3e",
                  padding: 5,
                  borderRadius: 20,
                }}
              ></i>
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
        <div className={styles.contentBody}>
          <div className={styles.galleries}>
            <GalleryCard></GalleryCard>
            <GalleryCard></GalleryCard>
            <GalleryCard></GalleryCard>
          </div>
          <div className={styles.pagination}></div>
        </div>

        {/* Bottom */}
        <div
          className={styles.contentfooter + " btm-section mb-3"}
          style={{ clear: "both" }}
        >
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
              <div className={"col-12 col-sm-6 p-0 " + styles.contactContainer}>
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
        {/* End Bottom */}
      </div>
    );
  }
}

export default index;
