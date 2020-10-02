import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

// Import assets
import MinistryImg from "../../../asset/about/ministry.jpg";

export class index extends Component {
  render() {
    return (
      <div className={styles.history}>
        <div className={styles.contentHeader}>
          <p className="m-0">ជីវប្រវត្តិក្រសួង</p>
        </div>
        <div className={"row m-0 " + styles.contentBody}>
          <div className="col-lg-4 p-0">
            <img
              src={MinistryImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-lg-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam fuga adipisci veniam, laborum dolorum ex itaque tempore
              explicabo, impedit ab consectetur soluta ea tenetur totam maxime
              distinctio cumque pariatur recusandae.
            </p>
          </div>
          <div className={"col-lg-3 " + styles.ministryList}>
            <h1>ពត័មានមន្រ្ដី</h1>
            <ul>
              <li>ឯកឧត្តម ចែម ស្ងួន (1993-1998)</li>
              <li>ឯកឧត្តម អ៊ុក វិធុន (1999–2001)</li>
              <li>ឯកឧត្តម នាវ ស៊ីថុង (2002-2017)</li>
              <li>ឯកឧត្តម អង្គ វង្សវឌ្ឍនា (2017–2020)</li>
              <li>
                <Link>ឯកឧត្តម កើត រិទ្ធ (2020–បច្ចុប្បន្ន)</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
