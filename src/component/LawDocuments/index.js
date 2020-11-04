import React, { Component } from "react";
import styles from "./index.module.css";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Paginate from "../Shared/Pagination";
import { colors } from "@material-ui/core";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const top100Films = [
      { title: "The Shawshank Redemption", year: 1994 },
      { title: "The Godfather", year: 1972 },
      { title: "The Godfather: Part II", year: 1974 },
      { title: "The Dark Knight", year: 2008 },
    ];

    const defaultProps = {
      options: top100Films,
      getOptionLabel: (option) => option.title,
    };

    const flatProps = {
      options: top100Films.map((option) => option.title),
    };

    return (
      <div className={styles.lawDocumentsContainer}>
        <h1>Search for any Document</h1>
        <div className={styles.inputContainer}>
          <div>
            <Autocomplete
              {...defaultProps}
              id="debug"
              debug
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{ style: { fontFamily: "hanuman" } }}
                  label="ជម្រើសពពួកឯកសារ"
                  margin="normal"
                />
              )}
            />
          </div>
          <div>
            <Autocomplete
              {...defaultProps}
              id="debug"
              debug
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{ style: { fontFamily: "hanuman" } }}
                  label="ពាក្យ​គន្លឹះ និងលេខ:"
                  margin="normal"
                />
              )}
            />
          </div>
        </div>

        {/* Table */}
        <div className={"px-2 table-responsive-lg " + styles.tableContainer}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" width="110" style={{ minWidth: "100px" }}>
                  លេខសំគាល់
                </th>
                <th scope="col" width="330" style={{ minWidth: "330px" }}>
                  ឈ្មោះឯកសារ
                </th>
                <th scope="col" width="90" style={{ minWidth: "70px" }}>
                  ទំហំ
                </th>
                <th scope="col" width="130" style={{ minWidth: "110px" }}>
                  ថ្ងៃបោះពុម្ភ
                </th>
                <th scope="col" width="90" style={{ maxWidth: "90px" }}>
                  Pdf(ខ្មែរ)
                </th>
                <th scope="col" width="90" style={{ maxWidth: "90px" }}>
                  Pdf(អង់គ្លេស)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle">2</td>
                <td>
                  សេចក្តីថ្លែងអំណរគុណរបស់ឯកឧត្តម ព្រុំ សុខា
                  រដ្ឋមន្ត្រីក្រសួងមុខងារសាធារណៈ ប្រគេនព្រះថេរានុថេរៈ
                  និងជូនចំពោះសម្តេច ឯកឧត្តម លោកជំទាវ
                  ដែលមានសទ្ធាជ្រះថ្លាចូលរួមចាប់មគ្គផលបុណ្យកឋិនទាន
                </td>
                <td className="align-middle">120 KB</td>
                <td className="align-middle">១៩/តុលា/២០២០</td>
                <td className="align-middle">
                  <img
                    src={"http://www.moj.gov.kh/img/iconfinder_pdf_83985.png"}
                  ></img>
                </td>
                <td className="align-middle">
                  {" "}
                  <img
                    src={"http://www.moj.gov.kh/img/iconfinder_pdf_83985.png"}
                  ></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <Paginate pageCount={5} />
      </div>
    );
  }
}

export default index;
