import React from "react";
import {
  Grid,
  Button,
  Tooltip,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const Section8 = () => {
  const dateValue: Date = new Date(new Date().getFullYear());

  const handleDownloadClick = () => {
    alert("Downloaded");
  };
  return (
    <>
      <Grid container style={{ height: 60 }}>
        <Grid item xs={2} md={2} sm={2}>
          <DatePickerComponent
            placeholder="Enter Date"
            value={dateValue}
            format="dd-MMM-yy"
            start="2000"
            depth="2022"
          ></DatePickerComponent>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ height: 100 }}>
        <Grid item xs={6} md={2} sm={6}>
          <DatePickerComponent
            placeholder="Enter Date"
            value={dateValue}
            format="dd-MMM-yy"
            start="2000"
            depth="2022"
          ></DatePickerComponent>
        </Grid>
        <Grid style={{ marginTop: "1px" }} item xs={6} md={10} sm={6}>
          <Tooltip title="Download" placement="top">
            <Button
              onClick={handleDownloadClick}
              variant="contained"
              color="primary"
            >
              Downlaod
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "1rem" }}>
        <Grid item xs={6} md={2} sm={6}>
          <FormControlLabel
            value="Not validated"
            control={<Radio />}
            label="Resolved"
          />
        </Grid>
        <Grid item xs={6} md={10} sm={6}>
          <Tooltip title="Download" placement="top">
            <Button
              onClick={handleDownloadClick}
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#2979ff", color: "white" }}
            >
              Downlaod
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "1rem" }}>
        <Grid item xs={6} md={2} sm={6}>
          <FormControlLabel
            value="Not validated"
            control={<Radio />}
            label="On hold"
          />
        </Grid>
        <Grid item xs={6} md={10} sm={6}>
          <Tooltip title="Download" placement="top">
            <Button
              onClick={handleDownloadClick}
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#2979ff", color: "white" }}
            >
              Downlaod
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "1rem" }}>
        <Grid item xs={6} md={2} sm={6}>
          <FormControlLabel
            value="Not validated"
            control={<Radio />}
            label="Invalid"
          />
        </Grid>
        <Grid item xs={6} md={10} sm={6}>
          <Tooltip title="Download" placement="top">
            <Button
              onClick={handleDownloadClick}
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#2979ff", color: "white" }}
            >
              Downlaod
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default Section8;
