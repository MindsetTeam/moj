import React, { Component } from "react";
import styles from "./index.module.css";

// Import
import CV from "./cv";
import Form from "./form";

// Material UI
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
        <Box p={2}>
          <Typography>{children}</Typography>
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

  return (
    <div className="container-fluid my-2 pt-1" style={{ background: "#fff" }}>
      <AppBar
        position="static"
        style={{
          boxShadow: "none",
          color: "#dc3545",
          backgroundColor: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="ពាក្យស្នើសុំព្រឹត្តិបត្រថ្កោលទោស"
            style={{
              fontFamily: "hanuman",
              fontSize: "1.1em",
              fontWeight: "bold",
              outline: "none",
              marginRight: "20px",
            }}
          />
          <Tab
            label="ប្រវត្តិរូបសង្ខេប"
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
        <Form></Form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CV></CV>
      </TabPanel>
    </div>
  );
}
