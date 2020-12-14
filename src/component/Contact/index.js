import React, { Component, useState } from "react";
import styles from "./index.module.css";

// Material UI
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Import assets
import Ministry from "../../asset/contact/ministry.jpg";
import Telegram from "../../asset/telegram.png";
import Facebook from "../../asset/facebook.png";
import Youtube from "../../asset/youtube.png";

import ChinMalin from "../../asset/contact/he/chin_malin.jpg";
import KimSantepheap from "../../asset/contact/he/kim_santepheap.jpg";
import SanSophorn from "../../asset/contact/he/san_sophorn.jpg";

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box
               style={{
                  paddingTop: "20px",
                  paddingLeft: 0,
               }}
            >
               <Typography component={"span"}>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired,
};

export default function () {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const [userInput, setUserInput] = useState({});

   const handleChangeUserInput = (e) => {
      const { name, value } = e.target;
      setUserInput({
         ...userInput,
         [name]: name === "imageFile" ? e.target.files[0] : value,
      });
   };

   return (
      <div
         className="container-fluid my-2 pt-1"
         style={{ background: "#FDEFC2" }}
      >
         <div>
            <AppBar
               position="static"
               style={{
                  boxShadow: "none",
                  color: "#dc3545",
                  backgroundColor: "rgb(253, 239, 194)",
               }}
            >
               <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
               >
                  <Tab
                     label="ទំនាក់ទំនងសាធារណៈ"
                     style={{
                        fontFamily: "hanuman",
                        fontSize: "1.1em",
                        fontWeight: "bold",
                        outline: "none",
                        marginRight: "20px",
                     }}
                  />
                  <Tab
                     label="អ្នកនាំពាក្យ"
                     style={{
                        fontFamily: "hanuman",
                        fontSize: "1.1em",
                        outline: "none",
                        fontWeight: "bold",
                     }}
                  />
               </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
               {
                  <div style={{ fontFamily: "hanuman" }}>
                     {/* <h4 className="text-danger font-weight-bolder">ទំនាក់ទំនងសាធារណៈ</h4> */}

                     <div
                        className="row align-items-center justify-content-center mx-1 "
                        style={{ backgroundColor: "#fff" }}
                     >
                        <div className="col-md-6 contact-info">
                           <div className="row ">
                              <div className="col-sm-6 my-4">
                                 <h5 style={{ fontWeight: "bold" }}>
                                    អាស័យដ្ឋាន
                                 </h5>
                                 <p>
                                    មហាវិថីសម្តេចសុធារស ខណ្ឌដូនពេញ
                                    រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា
                                 </p>
                              </div>
                              <div className="col-sm-6  my-4">
                                 <h5 style={{ fontWeight: "bold" }}>
                                    លេខទូរស័ព្ទ
                                 </h5>
                                 <p>
                                    (+855) 23 216 322
                                    <br />
                                    (+855) 23 217 841
                                 </p>
                              </div>

                              <div className="col-sm-6 my-4">
                                 <h5 style={{ fontWeight: "bold" }}>
                                    គេហទំព័រ
                                 </h5>
                                 <p>www.moj.gov.kh</p>
                              </div>
                              <div className="col-sm-6 my-4">
                                 <h5 style={{ fontWeight: "bold" }}>
                                    សារអេឡិចត្រូនិក
                                 </h5>
                                 <p>សារអេឡិចត្រូនិក info@moj.gov.kh</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 p-3">
                           <img
                              atl="imageMinistryPlace"
                              src={Ministry}
                              className="img-fluid"
                           />
                        </div>
                     </div>

                     <div className="row mb-2">
                        <div className="col-md-6">
                           <form
                              onSubmit={(e) => {
                                 e.preventDefault();
                                 const userInputValue = new FormData();
                                 for (const name in userInput) {
                                    userInputValue.append(
                                       name,
                                       userInput[name]
                                    );
                                 }
                                 userInputValue.append(
                                    "your-subject",
                                    "Submitted"
                                 );
                                 fetch(
                                    "http://demo.mcs.gov.kh/moj/wp-json/contact-form-7/v1/contact-forms/305/feedback",
                                    {
                                       method: "POST",
                                       body: userInputValue,
                                    }
                                 )
                                    .then((res) => res.json())
                                    .then((data) => {
                                       const newValue = {};
                                       for (const name in userInput) {
                                          newValue[name] = "";
                                       }
                                       setUserInput(newValue);
                                    });
                              }}
                           >
                              <input
                                 name="your-name"
                                 value={userInput["your-name"]}
                                 className={
                                    "form-control form-control-lg " +
                                    styles.input
                                 }
                                 type="text"
                                 onChange={handleChangeUserInput}
                                 style={{ marginTop: "0px !important" }}
                                 placeholder="ឈ្មោះ"
                              />
                              <input
                                 name="your-email"
                                 value={userInput["your-email"]}
                                 className={
                                    "form-control form-control-lg " +
                                    styles.input
                                 }
                                 type="email"
                                 onChange={handleChangeUserInput}
                                 placeholder="អីម៉ែល"
                              />
                              <input
                                 name="your-phoneNum"
                                 value={userInput["your-phoneNum"]}
                                 onChange={handleChangeUserInput}
                                 className={
                                    "form-control form-control-lg " +
                                    styles.input
                                 }
                                 type="number"
                                 placeholder="លេខទូរស័ព្ទ"
                              />
                              <button
                                 type="button"
                                 className={
                                    "btn btn-light btn-lg btn-block font-weight-bolder " +
                                    styles.button
                                 }
                                 onClick={() =>
                                    document
                                       .querySelector("#filePicker")
                                       .click()
                                 }
                              >
                                 {userInput.imageFile
                                    ? userInput.imageFile.name
                                    : "បញ្ចូលរូបភាព ឬឯកសារ PDF"}
                              </button>
                              <input
                                 type="file"
                                 name="imageFile"
                                 className="d-none"
                                 accept="image/*"
                                 onChange={handleChangeUserInput}
                                 id="filePicker"
                              ></input>
                              <textarea
                                 value={userInput["your-message"]}
                                 className={"form-control " + styles.textarea}
                                 placeholder="មតិយោបល់"
                                 onChange={handleChangeUserInput}
                                 rows="5"
                                 name="your-message"
                              ></textarea>
                              <div className="text-center mb-3">
                                 <button
                                    type="submit"
                                    className={
                                       "btn btn-light text-danger font-weight-bolder btn-lg w-50 " +
                                       styles.button
                                    }
                                 >
                                    ផ្ញើមតិយោបល់
                                 </button>
                              </div>
                           </form>
                        </div>
                        <div className="col-md-6" style={{ marginTop: "20px" }}>
                           <div className="row m-0">
                              <div
                                 className="col-12 px-0"
                                 style={{ background: "#fff" }}
                              >
                                 <div id="mapInfo" className="px-2 pt-2">
                                    <iframe
                                       frameborder="0"
                                       style={{ width: "100%" }}
                                       height="390"
                                       src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4Scm2TVRCTERlYNzc7x2fvA&key=AIzaSyD4j2M6KG6VoR0XICDghaj8YkqCQuFan1s&zoom=16`}
                                       allowfullscreen
                                    ></iframe>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-6 p-0 mb-2 mb-sm-0 w-100 mx-auto">
                                 <div className="social-media w-75 mx-auto pt-3 d-flex justify-content-around  ">
                                    <img
                                       alt="facebookIcon"
                                       src={Facebook}
                                       style={{ width: "40px", height: "40px" }}
                                    />
                                    <img
                                       src={Youtube}
                                       alt="youtubeIcon"
                                       style={{ width: "40px", height: "40px" }}
                                    />
                                    <img
                                       src={Telegram}
                                       alt="telegramIcon"
                                       style={{ width: "40px", height: "40px" }}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               }
            </TabPanel>
            <TabPanel value={value} index={1}>
               {
                  <div style={{ fontFamily: "hanuman" }} className="p-2">
                     <div className={styles.messenger}>
                        <img
                           src={KimSantepheap}
                           className={styles.messengerImg}
                        />
                        <div className={styles.messengerInfo}>
                           <h1>ឯកឧត្តម គឹម សន្តិភាព</h1>
                           <div style={{ marginTop: "15px" }}>
                              <p>
                                 <i class="fas fa-phone-alt"></i> +855 12 76
                                 9999
                              </p>
                              <p>
                                 <i class="fab fa-facebook-f"></i>{" "}
                                 <a
                                    target="_blank"
                                    href="https://www.facebook.com/peacemoj"
                                 >
                                    www.facebook.com/peacemoj
                                 </a>
                              </p>
                              <p>
                                 <i class="fab fa-whatsapp"></i> +855 12 76 9999
                              </p>
                              <p>
                                 <i class="fab fa-telegram-plane"></i> +855 12
                                 76 9999
                              </p>
                           </div>
                        </div>
                     </div>
                     <hr></hr>
                     <div className={styles.messenger}>
                        <img src={SanSophorn} className={styles.messengerImg} />
                        <div className={styles.messengerInfo}>
                           <h1>ឯកឧត្តម សន សោភ័ណ</h1>
                           <div style={{ marginTop: "15px" }}>
                              <p>
                                 <i class="fas fa-phone-alt"></i> +855 12 79 73
                                 72
                              </p>
                              <p>
                                 <i class="fab fa-facebook-f"></i> #
                              </p>
                              <p>
                                 <i class="fab fa-whatsapp"></i> +855 12 79 73
                                 72
                              </p>
                              <p>
                                 <i class="fab fa-telegram-plane"></i> +855 12
                                 79 73 72
                              </p>
                           </div>
                        </div>
                     </div>
                     <hr></hr>
                     <div className={styles.messenger}>
                        <img
                           src={ChinMalin}
                           className={styles.messengerImg}
                        ></img>
                        <div className={styles.messengerInfo}>
                           <h1>ឯកឧត្តម ជិន ម៉ាលីន</h1>
                           <div style={{ marginTop: "15px" }}>
                              <p>
                                 <i class="fas fa-phone-alt"></i> +855 61 666
                                 778
                              </p>
                              <p>
                                 <i class="fab fa-facebook-f"></i>{" "}
                                 <a
                                    target="_blank"
                                    href="https://www.facebook.com/malin.chin.9"
                                 >
                                    www.facebook.com/malin.chin.9
                                 </a>
                              </p>
                              <p>
                                 <i class="fab fa-whatsapp"></i> +855 61 666 778
                              </p>
                              <p>
                                 <i class="fab fa-telegram-plane"></i> +855 61
                                 666 778
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               }
            </TabPanel>
         </div>
      </div>
   );
}
