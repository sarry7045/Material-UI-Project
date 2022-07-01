import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem,
} from "@material-ui/core";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const Section1 = () => {
  // const [selectedDate, setSelectedDate] = useState(null);
  const dateValue: Date = new Date(new Date().getFullYear());

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={6}>
          <TextField
            type="text"
            name="name"
            fullWidth={true}
            size="small"
            label="Case Number"
            variant="outlined"
            color="primary"
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <TextField
            select
            fullWidth={true}
            size="small"
            variant="outlined"
            label="Username"
            color="primary"
          >
            <MenuItem value="Amit">@Amit Chowdhury</MenuItem>
            <MenuItem value="Lakshay">@Lakshay Chowdhury</MenuItem>
            <MenuItem value="Lalit">@Lalit Chowdhury</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <TextField
            select
            fullWidth={true}
            size="small"
            variant="outlined"
            label="Select Outages"
            color="primary"
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
        </Grid>
        <Grid style={{ marginTop: "8px" }} item xs={12} md={3} sm={6}>
          {/* <DatePicker
            className="datecontainer"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Date:-"
            minDate={new Date()}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
          /> */}
          <DatePickerComponent
            placeholder="Enter Date"
            value={dateValue}
            format="dd-MMM-yy"
            start="2000"
            depth="2022"
          ></DatePickerComponent>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} sm={6}>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            1. Incident Number
          </Typography>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            2. Incident Type
          </Typography>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            3. Source of ticket
          </Typography>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            4. Customer Name
          </Typography>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            5. CDIR
          </Typography>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            6. Offering
          </Typography>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            7. Trio
          </Typography>
          <Typography style={{ marginTop: "1rem" }} variant="body1">
            8. StackChannel
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
              value="Validated"
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

export default Section1;
