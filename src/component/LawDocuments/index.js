import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Paginate from "../Shared/Pagination";
import Loading from "../Shared/Loading";
import { colors } from "@material-ui/core";

export default function () {
  const [pageNum, setPageNum] = useState(1);
  const [docs, setDocs] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [docsCategories, setDocsCategories] = useState([{ name: "ទាំងអស់" }]);
  const [categoryTypes, setCategoryTypes] = useState(null)

  // const top100Films = [
  //   { title: "The Shawshank Redemption", year: 1994 },
  //   { title: "The Godfather", year: 1972 },
  //   { title: "The Godfather: Part II", year: 1974 },
  //   { title: "The Dark Knight", year: 2008 },
  // ];

  // const defaultProps = {
  //   options: top100Films,
  //   getOptionLabel: (option) => option.title,
  // };

  // const flatProps = {
  //   options: top100Films.map((option) => option.title),
  // };
  useEffect(() => {
    const fetchCategories = async () => {
      const dataCategories = [{ name: "ទាំងអស់" }];
      const fetchUrl =
        "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/categories?_fields=id,name&parent=";
      let docCategories = await fetch(fetchUrl + "17").then((res) =>
        res.json()
      );
      let fetchAwait = [];
      docCategories.forEach((v) => {
        fetchAwait.push(fetch(fetchUrl + v.id).then((res) => res.json()));
      });
      let dataChildCategories = await Promise.all(fetchAwait);
      dataChildCategories.forEach((v, i) => {
        dataCategories.push(docCategories[i]);
        v.forEach((childV) => {
          childV.name = "- " + childV.name;
          dataCategories.push(childV);
        });
      });
      setDocsCategories(dataCategories);
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    setIsLoading(true);
    let totalPage = 0;
    fetch(
      `http://demo.mcs.gov.kh/moj/wp-json/wp/v2/document?per_page=1&_fields=id,title,categories,acf&page=${pageNum}&categories=${categoryTypes||""}`
    )
      .then((res) => {
        totalPage = res.headers.get("x-wp-totalpages");
        return res.json();
      })
      .then((docs) => {
        console.log(docs);
        setDocs(docs);
        setTotalPage(totalPage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pageNum,categoryTypes]);
  const changePageNum = (num) => {
    setPageNum(num.selected + 1);
  };
  return (
    <div className={styles.lawDocumentsContainer}>
      <h1>Search for any Document</h1>
      <div className={styles.inputContainer}>
        <div>
          <Autocomplete
            options={docsCategories}
            getOptionLabel={(option) => option.name}
            defaultValue={docsCategories[0]}
            disableClearable
            onChange={(e,value)=>{
              setCategoryTypes(value.id);
            }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  InputLabelProps={{
                    style: { fontFamily: "hanuman", whiteSpace: "pre" },
                  }}
                  label="ជម្រើសពពួកឯកសារ"
                  margin="normal"
                />
              );
            }}
          />
        </div>
        <div>
          <Autocomplete
            // {...defaultProps}
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
            {!isLoading &&
              docs.map((v) => {
                return (
                  <tr>
                    <td className="align-middle">
                      {v.acf.id_document || "មិនមាន"}
                    </td>
                    <td>{v.title.rendered}</td>
                    <td className="align-middle">
                      {Math.floor(v.acf.khmer_file.filesize / 1000000) > 0
                        ? `${(
                            v.acf.khmer_file.filesize * 0.00000095367432
                          ).toFixed(2)} MB`
                        : `${Math.round(
                            v.acf.khmer_file.filesize * 0.0009765625
                          )} KB`}
                    </td>
                    <td className="align-middle">{v.acf.published_date}</td>
                    <td className="align-middle">
                      <a href={v.acf.khmer_file.url}>
                        <img
                          alt="Khmer file url"
                          style={
                            v.acf.khmer_file ? {} : { filter: "grayscale(1)" }
                          }
                          src={
                            "http://www.moj.gov.kh/img/iconfinder_pdf_83985.png"
                          }
                        ></img>
                      </a>
                    </td>
                    <td className="align-middle">
                      {" "}
                      <a href={v.acf.english_file.url}>
                        <img
                          alt="English file url"
                          style={
                            !v.acf.english_file
                              ? { filter: "grayscale(1)" }
                              : {}
                          }
                          src={
                            "http://www.moj.gov.kh/img/iconfinder_pdf_83985.png"
                          }
                        ></img>
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        )}
      </div>
      {/* Pagination */}
      <Paginate pageCount={totalPage} changePageNum={changePageNum} />
    </div>
  );
}
