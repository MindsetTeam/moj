import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-lg-0">
        <Link className="navbar-brand d-lg-none p-lg-0 p-sm-2">មាតិកា</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown active">
              <Link
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                អំពីក្រសួង
              </Link>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <Link
                  className="dropdown-item"
                  href="/Linkbout/welcome-message"
                >
                  សារស្វាគមន៏
                </Link>
                <Link
                  className="dropdown-item"
                  href="/Linkbout/ministry-biography"
                >
                  ជីវប្រវត្តិក្រសួង
                </Link>
                <Link className="dropdown-item">ជីវប្រវត្តិរដ្ឋមន្រ្ដី</Link>
                <Link
                  className="dropdown-item"
                  href="/Linkbout/ministry-structure"
                >
                  រចនាសម្ព័ន្ឋក្រសួង
                </Link>
                <Link
                  className="dropdown-item"
                  href="/Linkbout/previous-ministers"
                >
                  រដ្ឋមន្រ្ដីក្រសួងយុត្តិធម៌ចាប់ពីឆ្នាំ(1993-បច្ចុប្បន្ន)
                </Link>
                <Link className="dropdown-item">
                  ព័ត៍មានមន្រ្តីរាជការក្រសួងយុត្តិធម៌
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown ">
              <Link
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                បណ្ដុំឯកសារ
              </Link>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <Link className="dropdown-item">ច្បាប់និងបទបញ្ញត្តិ</Link>
                <Link className="dropdown-item">សន្ទានុក្រមពាក្យច្បាប់</Link>
                <Link className="dropdown-item">បណ្ណាល័យឯកសារ</Link>
                <Link className="dropdown-item">Search Engine</Link>
              </div>
            </li>
            <li className="nav-item dropdown ">
              <Link
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ព័ត៌មាននិងឯកសារ
              </Link>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <Link className="dropdown-item">ព័ត៌មានរដ្ឋមន្រ្តី</Link>
                <Link className="dropdown-item">ព័ត៌មានក្រសួង</Link>
                <Link className="dropdown-item">ព័ត៌មានថ្នាក់ដឹកនាំ</Link>
                <Link className="dropdown-item">
                  ព័ត៌មានលេខាធិការដ្ឋានសាលាដំបូងរាជធានី-ខេត្ត
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown ">
              <Link
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                សេវាសាធារណៈ
              </Link>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <Link className="dropdown-item">
                  ពាក្យស្នើសុំព្រឹត្តិបត្រថ្កាលទោស
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link">ការបោះពុម្ពផ្សាយ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                ទំនាក់ទំនងសាធារណៈ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
