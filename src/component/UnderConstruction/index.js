import React, { Component } from "react";
import styles from "./index.module.css";

import logo from "../../asset/logo.png";

export class index extends Component {
  render() {
    return (
      <div className={styles.underConstructionContainer}>
        <img src={logo} className={styles.logo} alt=""></img>
        <p style={{ fontSize: "2rem" }}>
          Coming <span style={{ color: "#e53e3e" }}>Soon</span>
        </p>
      </div>
    );
  }
}

export default index;
