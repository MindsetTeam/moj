import React, { Component } from "react";
import styles from "./index.module.css";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
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

  const [fatherStatus, setFatherStatus] = React.useState("survive");
  const [motherStatus, setMotherStatus] = React.useState("survive");
  const [spouseStatus, setSpouseStatus] = React.useState("survive");

  const handleFatherStatusChange = (event) => {
    setFatherStatus(event.target.value);
  };

  const handleMotherStatusChange = (event) => {
    setMotherStatus(event.target.value);
  };

  const handleSpouseStatusChange = (event) => {
    setSpouseStatus(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className={styles.templateContainer}>
      <form className={classes.root} noValidate autoComplete="off">
        <p className={styles.formTitle + " mb-0"}>ព័ត៌មានផ្ទាល់ខ្លួន</p>
        <TextField
          id="standard-basic"
          label="នាមត្រកូល និង​ នាមខ្លួន"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
        />
        <TextField
          id="standard-basic"
          label="ឈ្មោះហៅក្រៅ"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
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
          onChange={handleGenderChange}
          style={{ width: "100px" }}
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
        {/* Father */}
        <p className={styles.cvTitle + " mb-0"}>ព័ត៌មានឪពុក</p>
        <TextField
          id="standard-basic"
          label="ឪពុកឈ្មោះ"
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

        <RadioGroup
          name="gender1"
          value={fatherStatus}
          onChange={handleFatherStatusChange}
          style={{
            display: "inline-block",
            flexDirection: "row",
            paddingTop: "10px",
          }}
        >
          <FormControlLabel
            value="death"
            control={<Radio />}
            label={
              <p className="m-0" style={{ fontFamily: "hanuman" }}>
                ស្លាប់
              </p>
            }
          />
          <FormControlLabel
            value="survive"
            control={<Radio />}
            label={
              <p className="m-0" style={{ fontFamily: "hanuman" }}>
                រស់
              </p>
            }
          />
        </RadioGroup>

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
          id="standard-basic"
          label="មុខរបរ"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
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
        {/* Mother */}
        <p className={styles.cvTitle + " mb-0"}>ព័ត៌មានម្ដាយ</p>
        <TextField
          id="standard-basic"
          label="ម្ដាយឈ្មោះ"
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

        <RadioGroup
          name="gender1"
          value={motherStatus}
          onChange={handleMotherStatusChange}
          style={{
            display: "inline-block",
            flexDirection: "row",
            paddingTop: "10px",
          }}
        >
          <FormControlLabel
            value="death"
            control={<Radio />}
            label={
              <p className="m-0" style={{ fontFamily: "hanuman" }}>
                ស្លាប់
              </p>
            }
          />
          <FormControlLabel
            value="survive"
            control={<Radio />}
            label={
              <p className="m-0" style={{ fontFamily: "hanuman" }}>
                រស់
              </p>
            }
          />
        </RadioGroup>

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
          id="standard-basic"
          label="មុខរបរ"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
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
        {/* Spouse  */}
        <p className={styles.cvTitle + " mb-0"}>ព័ត៌មានប្ដី ឫប្រពន្ធ</p>

        <TextField
          id="standard-basic"
          label="ប្ដី ឫប្រពន្ធឈ្មោះ"
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

        <RadioGroup
          name="gender1"
          value={spouseStatus}
          onChange={handleSpouseStatusChange}
          style={{
            display: "inline-block",
            flexDirection: "row",
            paddingTop: "10px",
          }}
        >
          <FormControlLabel
            value="death"
            control={<Radio />}
            label={
              <p className="m-0" style={{ fontFamily: "hanuman" }}>
                ស្លាប់
              </p>
            }
          />
          <FormControlLabel
            value="survive"
            control={<Radio />}
            label={
              <p className="m-0" style={{ fontFamily: "hanuman" }}>
                រស់
              </p>
            }
          />
        </RadioGroup>

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
          id="standard-basic"
          label="មុខរបរ"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
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

        {/* Button */}
        <div style={{ width: "150px", marginTop: "10px", marginLeft: "auto" }}>
          <input
            type="button"
            value="ត្រួតពិនិត្យ"
            className={styles.formInputButton}
          ></input>
          <input
            type="button"
            value="រក្សាទុក"
            className={styles.formInputButton}
            style={{ marginLeft: "10px" }}
          ></input>
        </div>
      </form>
    </div>
  );
}
