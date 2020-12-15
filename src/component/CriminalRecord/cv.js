import React, { Component } from "react";
import styles from "./index.module.css";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
    fontFamily: "hanuman",
  },
}));

const genders = [
  {
    value: "male",
    label: "ប្រុស",
  },
  {
    value: "female",
    label: "ស្រី",
  },
];

export default function () {
  const classes = useStyles();
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className={styles.templateContainer}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="នាមត្រកូល និង​ នាមខ្លួន"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
          style={{ width: "450px" }}
        />
        <TextField
          id="standard-basic"
          label="អក្សរឡាតាំង"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
          style={{ width: "450px" }}
        />
        <TextField
          id="standard-select-currency"
          select
          label="ភេទ"
          value={gender}
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
          onChange={handleChange}
          style={{ width: "100px" }}
          //    helperText="Please select your currency"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-basic"
          label="សញ្ជាតិដើម"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
        />
        <TextField
          id="standard-basic"
          label="សញ្ជាតិបច្ចុប្បន្ន"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
        />

        <TextField
          id="date"
          label="ថ្ងៃ ខែ​ ឆ្នាំកំណើត"
          type="date"
          defaultValue="1980-01-01"
          format="dd/MM/yyyy"
          InputProps={{
            className: classes.input,
            shrink: true,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
        />
        <TextField
          id="standard-basic"
          label="មុខរបរ"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
          multiline
          rowsMax={4}
        />
        <TextField
          id="standard-basic"
          label="ទីកន្លែងកំណើត"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
          multiline
          rowsMax={4}
          style={{ width: "100%" }}
        />
        <TextField
          id="standard-basic"
          label="អាស័យដ្ឋានបច្ចុប្បន្ន"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
          multiline
          rowsMax={4}
          style={{ width: "100%" }}
        />
      </form>
    </div>
  );
}
