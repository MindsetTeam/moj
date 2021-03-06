import React, { useEffect } from "react";

import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./Slider.css";

const MutipleSlidesPerView = (props) => {
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }, [props]);
  const params = {
    slidesPerView: 3,
    spaceBetween: 8,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      // dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
    },
  };

  const slides = [];
  props.imgs.forEach((v, i) => {
    slides.push(
      <div
        key={`slide-${i}`}
        onClick={props.changeImage.bind(this, v)}
        style={{ cursor: "pointer" }}
      >
        <img
          className="img-fluid gallery-subImg"
          src={v}
          style={{ listStyle: "none", objectFit: 'cover' }}
          alt=""
        />
      </div>
    );
  });
  return (
    <Swiper {...params}>
      {/* {props.imgs.map((v, i) => (
        <div key={i}>
          <div
            style={{
              backgroundImage: `url(${v})`,
              height: "100px",
            }}
          ></div>
        </div>
      ))} */}
      {slides}
    </Swiper>
  );
};
export default MutipleSlidesPerView;
