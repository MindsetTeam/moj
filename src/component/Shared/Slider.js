import React from "react";
import ReactIdSwiper from "react-id-swiper";

const MutipleSlidesPerView = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

  return (
    <div>
      React id swiper
      <button>Toggle Swiping</button>
      Should swipe:
      <ReactIdSwiper {...params}>
        <div
          className="slide1"
          style={{
            height: "300px",
            background: "lightblue",
          }}
        >
          Slide 1
        </div>
        <div className="slide2">Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </ReactIdSwiper>
    </div>
  );
};
export default MutipleSlidesPerView;
