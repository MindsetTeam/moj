import React, { useEffect } from "react";
import structureImg from "../../../asset/about/structure.jpg";
import "./style.css";

export default function () {
  useEffect(() => {
    const collLists = document.querySelectorAll(".collapsible");
    for (let i = 0; i < collLists.length; i++) {
      collLists[i].addEventListener("click", (e) => {
        collLists[i].classList.toggle("active");
        const content = collLists[i].nextElementSibling;

        !content.style.maxHeight
          ? (content.style.maxHeight = content.scrollHeight + "px")
          : (content.style.maxHeight = null);
    });
    }
  }, []);
  return (
    <div className="content-container structure">
      <div className="content-header"></div>
      <div className="content-body">
        <div className="row">
          <div className="col-lg-3">
            <div className="mt-3 pb-2">
              <span className="p-2" style={{ backgroundColor: "wheat" }}>
                រចនាសម្ព័ន្ធ
              </span>
            </div>

            <p className="collapsible mb-1 p-1 pl-3 text-white">
              ថ្នាក់ដឹកនាំក្រសួង
            </p>
            <div className="content m-0 ml-4">
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                រដ្ធមន្រ្តីក្រសួងយុត្តធម៍
              </p>
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                រដ្ធលេខាធិការ
              </p>
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                អនុរដ្ធលេខាធិការ
              </p>
            </div>

            <p className="collapsible mb-1 p-1 pl-3 text-white">
              ថ្នាក់ដឹកនាំបច្ចេកទេស
            </p>
            <div className="content m-0 ml-4">
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                រដ្ធលេខាធិការ
              </p>
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                អនុរដ្ធលេខាធិការ
              </p>
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                អគនាយក
              </p>
            </div>

            <p className="collapsible mb-1 p-1 pl-3 text-white">
              ថ្នាក់ដឹកនាំវិជ្ជាជីវះតុលាការ
            </p>
            <div className="content m-0 ml-4">
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                ប្រធានវិជ្ជាជីវះតុលាការ
              </p>
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                ​​​​ អនុប្រធានវិជ្ជាជីវះតុលាការ
              </p>
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                នាយកសាលា
              </p>
            </div>

            <p className="collapsible mb-1 p-1 pl-3 text-white">
              ថ្នាក់ដឹកនាំអង្គភាពរដ្ធបាលតុលាការ{" "}
            </p>
            <div className="content m-0 ml-4">
              <p
                className="mb-0 p-1 pl-3 text-white"
                style={{
                  borderBottom: "3px solid white",
                  backgroundColor: "#e53e3e",
                }}
              >
                ប្រធានវិជ្ជាជីវះតុលាការ
              </p>
            </div>
          </div>

          <div className="col-lg-9">
            <img src={structureImg} alt="" srcSet="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
