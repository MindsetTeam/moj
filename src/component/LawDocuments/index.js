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
                <th scope="col" width="120">
                  លេខសំគាល់
                </th>
                <th scope="col" width="300">
                  ឈ្មោះឯកសារ
                </th>
                <th scope="col" width="50">
                  ទំហំ
                </th>
                <th scope="col" width="120">
                  ថ្ងៃបោះពុម្ភ
                </th>
                <th scope="col" width="50">
                  Pdf(ខ្មែរ)
                </th>
                <th scope="col" width="50">
                  Pdf(អង់គ្លេស)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="align-middle">
                  1
                </th>
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
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          {/* Pagination */}
          <Paginate pageCount={1} />
        </div>
      </div>
    );
  }
}

export default index;
