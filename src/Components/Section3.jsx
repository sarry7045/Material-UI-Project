import React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const Section3 = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            1. Id Events Updated Correctly
          </Typography>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            2. Is Status Updated Correctly
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.1rem" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="feNot validated"
              control={<Radio />}
              label="Validated"
            />
            <FormControlLabel
              value="Not validated"
              control={<Radio />}
              label="Not validated"
            />
            <TextField
              type="text"
              size="small"
              variant="outlined"
              color="primary"
            />
          </RadioGroup>
          <RadioGroup
            style={{ marginTop: "0.1rem" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="feNot validated"
              control={<Radio />}
              label="Validated"
            />
            <FormControlLabel
              value="Not validated"
              control={<Radio />}
              label="Not validated"
            />
            <TextField
              type="text"
              size="small"
              variant="outlined"
              color="primary"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default Section3;
