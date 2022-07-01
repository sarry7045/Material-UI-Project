import React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import "./Section7.css";

const Section7 = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12} sm={12}>
          <Typography variant="h6">1. Comments Required:</Typography>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            color="primary"
          />
        </Grid>
        <Grid item xs={12} md={12} sm={12} style={{ marginTop: "2rem" }}>
          <Typography variant="h6">2. Slack Channel:</Typography>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          {" "}
          <div class="vertical-menu">
            <a>@Amit Chowdhury</a>
            <a>@Vinay</a>
            <a>@Gopi</a>
            <a>@Jay</a>
            <a>@Suraj</a>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} sm={12} style={{ marginTop: "2rem" }}>
        <Typography variant="h6">
          ** Hold down the Control Button to Select Multiple Options**
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} sm={12} style={{ marginTop: "1rem" }}>
        <RadioGroup>
          <FormControlLabel
            value="feNot validated"
            control={<Radio />}
            label="Correctins done by TRM"
          />
          <FormControlLabel
            value="Not validated"
            control={<Radio />}
            label="Validation Done by Auditor"
          />
        </RadioGroup>
      </Grid>
    </>
  );
};

export default Section7;
