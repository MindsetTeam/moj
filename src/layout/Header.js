import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        {/* Top Search */}
        <div className="top-search p-2 p-sm-1 pt-1">
          <div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-envelope-fill"
              fill="#e53e3e"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "-2px", marginLeft: "5px" }}
            >
              <path
                fillRule="evenodd"
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              />
            </svg>
            <a
              href="#foo"
              style={{
                textDecoration: "none",
                color: "#e53e3e",
                fontSize: "14px",
                letterSpacing: "0.5px",
                paddingLeft: "3px",
              }}
            >
              Webmail
            </a>
          </div>

          {/* Search Box */}
          <form className="search" style={{ position: "relative" }}>
            <input
              type="text"
              name="search"
              className="searchbox"
              placeholder="ស្វែងរក"
            />
            <button className="search-img"></button>
          </form>
        </div>

        {/* Image Header */}
        <Link to="/">
          <div className="img-header"></div>
        </Link>

        {/* Navbar */}
        <Navbar></Navbar>
      </div>
    );
  }
}

export default Header;
