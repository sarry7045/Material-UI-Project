import React from "react";
import {
  Typography,
  Tabs,
  Tab,
  Box,
  AppBar,
  useTheme,
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MainContent() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box maxWidth="sm" sx={{ bgcolor: "background.paper", marginTop: "5rem" }}>
      <AppBar position="static" style={{ backgroundColor: "#2979ff" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Incident Summary" {...a11yProps(0)} />
          {/* <Tab label="Incident Summary" {...a11yProps(0)} /> */}
          <Tab label="Impacted Components" {...a11yProps(1)} />
          <Tab label="Status" {...a11yProps(2)} />
          <Tab label="Onhold Details" {...a11yProps(3)} />
          <Tab label="Resoluion" {...a11yProps(4)} />
          <Tab label="SNOW" {...a11yProps(5)} />
          <Tab label="Comments" {...a11yProps(6)} />
          <Tab label="Download Reports" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Section1 />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Section2 />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Section3 />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Section4 />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Section5 />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Section6 />
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <Section7 />
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          <Section8 />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
