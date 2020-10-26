import React, { useState } from "react";
import styles from "./index.module.css";
import extractionHtml from "../../../utils/extractionHTML";
import Slider from "../../Shared/Slider";

import truncateString from "../../../utils/truncateText";

export default function (props) {
  const [mainImage, setMainImage] = useState(
    props.data.acf["featured_image"].url
  );
  let imageValue = extractionHtml(props.data.content.rendered).imgTag;
  const modalClick = () => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  };
  return (
    <div className={styles.card}>
      <div
        data-toggle="modal"
        data-target={"#exampleModalCenter" + props.data?.id}
        data-backdrop="static"
        onClick={modalClick}
      >
        <img
          className={styles.thumbnail}
          src={props.data?.acf["featured_image"].url}
        ></img>
        <div className={styles.cardBody}>
          <p> {truncateString(props.data.title.rendered, 170)}</p>
          <div className={styles.cardBodyInfo}>
            <p>
              <i className="fa fa-calendar-alt pt-1 mr-1"></i>
              {props.data.date}
            </p>
            <p>
              {" "}
              <i className="fa fa-images pt-1 mr-1"></i>
              {imageValue.length} photos
            </p>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        class="modal fade "
        id={"exampleModalCenter" + props.data?.id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body p-0">
              <div className="pt-0 pt-md-0 py-md-3 px-lg-5 px-4">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h1
                    className="text-danger pt-2 mr-2"
                    style={{ fontSize: "1.2em" }}
                  >
                    {props.data?.title.rendered}
                  </h1>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    style={{ outline: "none" }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="pb-lg-3 pt-lg-2">
                  <img
                    src={mainImage}
                    className="img-fluid py-1"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="container bg-white">
                <Slider
                  imgs={[
                    props.data?.acf["featured_image"].url,
                    ...extractionHtml(props.data?.content.rendered).imgTag,
                  ]}
                  changeImage={(v) => {
                    setMainImage(v);
                  }}
                ></Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
