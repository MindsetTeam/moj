import React from "react";
import ReactIdSwiper from "react-id-swiper";

const MutipleSlidesPerView = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      React id swiper
      <button>Toggle Swiping</button>
      Should swipe:
      <ReactIdSwiper {...params}>
        <div
          className="slide1 "
          style={{
            height: "150px",
            background: "lightblue",
          }}
        >
          Slide 1
        </div>
        <div
          className="slide1 "
          style={{
            height: "150px",
            background: "lightblue",
          }}
        >
          Slide 2
        </div>
        <div
          className="slide1 "
          style={{
            height: "150px",
            background: "lightblue",
          }}
        >
          Slide 3
        </div>
        <div
          className="slide1 "
          style={{
            height: "150px",
            background: "lightblue",
          }}
        >
          Slide 4
        </div>
        <div
          className="slide1 "
          style={{
            height: "150px",
            background: "lightblue",
          }}
        >
          Slide 5
        </div>
      </ReactIdSwiper>
    </div>
  );
};
export default MutipleSlidesPerView;
