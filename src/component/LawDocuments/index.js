import React, { Component } from "react";
import styles from "./index.module.css";

import Paginate from "../Shared/Pagination";

export class index extends Component {
  render() {
    return (
      <div className={styles.lawDocumentsContainer}>
        <h1>Search for any Document</h1>
        <div className={styles.inputContainer + " row m-0"}>
          <input type="text" placeholder="ឈ្មោះឯកសារ"></input>
          <input type="text" placeholder="ខ្លឹមសារនៅក្នុងអត្ថបទ"></input>
          <input type="text" placeholder="អ្នកចុះហត្ថលេខា"></input>
          <input type="text" placeholder="..."></input>
        </div>

        {/* Table */}
        <div className={"px-2 table-responsive-lg " + styles.tableContainer}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" width="90">
                  លេខសំគាល់
                </th>
                <th scope="col" width="300">
                  ឈ្មោះឯកសារ
                </th>
                <th scope="col" width="100">
                  ប្រភេទឯកសារ
                </th>
                <th scope="col" width="50">
                  ថ្ងៃបោះពុម្ភ
                </th>
                <th scope="col" width="50">
                  Pdf(ខ្មែរ)
                </th>
                <th scope="col" width="50">
                  Pdf(អង់គ្លេស)
                </th>
                <th scope="col" width="50">
                  ចែករំលែក
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  Labore ut mollit cillum nostrud magna irure. Ea occaecat
                  adipisicing quis amet cillum. Cupidatat incididunt ipsum sunt
                  ipsum sit dolor duis occaecat. Cillum velit laboris duis quis
                  aliquip quis nostrud.
                </td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
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
