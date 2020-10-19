import React, { useLayoutEffect, useState } from "react";

import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const MutipleSlidesPerView = (props) => {
  const [width, height] = useWindowSize();

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
  console.log(
    props.imgs.map((v) => (
      <div
        style={{
          backgroundImage: `url(${v})`,
        }}
      ></div>
    ))
  );
  return (
    <Swiper {...params}>
      {props.imgs.map((v, i) => (
        <div key={i}>
          <div
            style={{
              backgroundImage: `url(${v})`,
              height: "100px",
            }}
          ></div>
        </div>
      ))}
    </Swiper>
  );
};
export default MutipleSlidesPerView;
