import React, { useLayoutEffect, useState, useEffect } from "react";

import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./Slider.css";

// const useWindowSize = () => {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     const updateSize = () => {
//       setSize([window.innerWidth, window.innerHeight]);
//     };
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   return size;
// };

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
          className="img-fluid"
          src={v}
          style={{ listStyle: "none", maxHeight: "300px" }}
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
