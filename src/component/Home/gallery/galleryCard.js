import React, { useState } from "react";
import styles from "./index.module.css";
import extractionHtml from "../../../utils/extractionHTML";
import Slider from "../../Shared/Slider";

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
          <p>{props.data.title.rendered}</p>
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
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Gallery
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-0">
              {/* <p>{props.id}</p>
              <img
                className={styles.mainImg}
                src={"https://robohash.org/" + props.id}
              ></img>
              <p className="text-center">
                Laborum ipsum laboris Lorem in incididunt nulla culpa nulla
                cillum. Mollit dolor sit nostrud dolore. Cillum minim officia ea
                ad enim dolore veniam non. Nulla adipisicing est culpa
                consectetur.
              </p>
              <div> */}
              {/* <Slider></Slider> */}
              {/* </div> */}

              <div className="latest-news row">
                <div className="latest-news-info pt-0 pt-md-0 py-md-3 px-lg-5 px-4">
                  <h1
                    className="latest-news-info-title text-danger pt-2"
                    style={{ fontSize: "1.2em" }}
                  >
                    {props.data?.title.rendered}
                  </h1>
                  <div className="latest-news-thumbnail pb-lg-3 pt-lg-2">
                    <img
                      src={mainImage}
                      className="img-fluid py-1"
                      style={{ width: "100%" }}
                    />
                  </div>
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
