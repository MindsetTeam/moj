import React, { Component } from "react";
import styles from "./index.module.css";

// Import assets
import Img93_98 from "../../../asset/about/ministers/noImg.jpg";
import Img99_01 from "../../../asset/about/ministers/noImg.jpg";
import Img02_17 from "../../../asset/about/ministers/2002-2017.jpg";
import Img17_20 from "../../../asset/about/ministers/2017-2020.jpg";
import Img20 from "../../../asset/about/ministers/2020.jpg";

export class index extends Component {
  render() {
    return (
      <div className={styles.previousMinisters}>
        <div className={styles.contentHeader}>
          <p className="m-0">ប្រវត្តិក្រសួង</p>
        </div>
        <div className={styles.contentBody}>
          <p className="m-0">
            Under the Charter, the Secretary-General is appointed by the General
            Assembly upon the recommendation of the Security Council. Mr.
            Guterres' predecessors as Secretary-General were: Ban Ki-moon
            (Korea) who served from January 2007 to December 2016; Kofi Annan
            (Ghana) who held office from January 1997 to December 2006; Boutros
            Boutros-Ghali (Egypt), who held office from January 1992 to December
            1996; Javier Pèrez de Cuèllar (Peru), who served from January 1982
            to December 1991; Kurt Waldheim (Austria), who held office from
            January 1972 to December 1981; U Thant (Burma, now Myanmar), who
            served from November 1961, when he was appointed acting
            Secretary-General (he was formally appointed Secretary-General in
            November 1962) to December 1971; Dag Hammarskjöld (Sweden), who
            served from April 1953 until his death in a plane crash in Africa in
            September 1961; and Trygve Lie (Norway), who held office from
            February 1946 to his resignation in November 1952.
          </p>

          <div className={styles.ministersListContainer}>
            <h1>បញ្ជីរដ្ឋមន្រ្ដី (1993-បច្ចុប្បន្ន)</h1>

            <div className={styles.ministersList}>
              <div className={"py-3 m-0 " + styles.minister}>
                <div style={{ width: "40%", height: "100%" }}>
                  <img
                    src={Img20}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="py-lg-1 pl-2" style={{ width: "60%" }}>
                  <h1 className={styles.ministerInfoTitle}>
                    <a href="#">ឯកឧត្តម កើត រិទ្ធ</a>
                  </h1>
                  <p className={styles.ministerInfoDate}>
                    អាណត្តិ: (2020–បច្ចុប្បន្ន)
                  </p>
                </div>
              </div>

              <div className={"py-3 m-0 " + styles.minister}>
                <div style={{ width: "40%", height: "100%" }}>
                  <img
                    src={Img17_20}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="py-lg-1 pl-2" style={{ width: "60%" }}>
                  <h1 className={styles.ministerInfoTitle}>
                    <a href="#">ឯកឧត្តម អង្គ វង្សវឌ្ឍនា</a>
                  </h1>
                  <p className={styles.ministerInfoDate}>
                    អាណត្តិ: (2017–2020)
                  </p>
                </div>
              </div>

              <div className={"py-3 m-0 " + styles.minister}>
                <div style={{ width: "40%", height: "100%" }}>
                  <img
                    src={Img02_17}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="py-lg-1 pl-2" style={{ width: "60%" }}>
                  <h1 className={styles.ministerInfoTitle}>
                    <a href="#"> ឯកឧត្តម នាវ ស៊ីថុង</a>
                  </h1>
                  <p className={styles.ministerInfoDate}>
                    អាណត្តិ: (2002-2017)
                  </p>
                </div>
              </div>

              <div className={"py-3 m-0 " + styles.minister}>
                <div style={{ width: "40%", height: "100%" }}>
                  <img
                    src={Img99_01}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="py-lg-1 pl-2" style={{ width: "60%" }}>
                  <h1 className={styles.ministerInfoTitle}>
                    <a href="#">ឯកឧត្តម អ៊ុក វិធុន</a>
                  </h1>
                  <p className={styles.ministerInfoDate}>
                    អាណត្តិ: (1999–2001)
                  </p>
                </div>
              </div>

              <div className={"py-3 m-0 " + styles.minister}>
                <div style={{ width: "40%", height: "100%" }}>
                  <img
                    src={Img93_98}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="py-lg-1 pl-2" style={{ width: "60%" }}>
                  <h1 className={styles.ministerInfoTitle}>
                    <a href="#">ចែម ស្ងួន</a>
                  </h1>
                  <p className={styles.ministerInfoDate}>
                    អាណត្តិ: (1993-1998)
                  </p>
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
