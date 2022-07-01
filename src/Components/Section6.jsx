import React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const Section6 = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography variant="body1">1. Ensure Ticket ia a P1</Typography>
        </Grid>
        <Grid item xs={6} md={9} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.5rem" }}
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
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography variant="body1">
            {" "}
            2. Check Critical P1 Incident Box
          </Typography>
        </Grid>
        <Grid item xs={6} md={9} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.5rem" }}
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
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography variant="body1">
            {" "}
            3. Update Correct Sev 1 Start Time and TRM Engagement Time under IM
            Metrics
          </Typography>
        </Grid>
        <Grid item xs={6} md={9} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.5rem" }}
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
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography variant="body1">
            {" "}
            4. Ensure Case Type is Set to Incident
          </Typography>
        </Grid>
        <Grid item xs={6} md={9} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.5rem" }}
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
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography variant="body1">
            {" "}
            5. Create and Update Recovery Tasks with Client Recovery Leader, OS
            and Apps DB Engineer
            <span>Note: Doesn't Apply to Indra Sev 1s.</span>
          </Typography>
        </Grid>
        <Grid item xs={6} md={9} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.5rem" }}
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
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography variant="body1">
            {" "}
            6. Update Correct Sev1 End TIme under IM Metrics
          </Typography>
        </Grid>
        <Grid item xs={6} md={9} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.5rem" }}
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
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography variant="body1">
            {" "}
            7. Update appropriate Incident Type : MCO/MCI/SCO/Infra
          </Typography>
        </Grid>
        <Grid item xs={6} md={9} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.5rem" }}
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
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography variant="body1">
            {" "}
            8. Update Caused by Infra Y or Name
            <span>Infra: Y for all Infra Sev 1s with no Cient Impact</span>
            <span>
              Infra: Y for all MCO's/MCI's/SCO's/SCI's where client issue caused
              due to Shared or Dedicated infra
              <span>
                {" "}
                Update remaining Infra Feilds if Caused by Infra Y . (No Nedeed
                where Caused by Infra :N)
              </span>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={6} md={9} sm={6}>
          <RadioGroup
            style={{ marginTop: "0.5rem" }}
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

export default Section6;
