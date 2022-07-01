import React from "react";
import {
  Typography,
  Grid,
  Container,
  Button,
  Tooltip,
  makeStyles,
  Toolbar,
  AppBar,
  CssBaseline,
} from "@material-ui/core";
import { FaReact } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "50px",
    // backgroundColor: "#F5F5F5",
    padding: "10px",
  },

  button: {
    marginTop: "40px",
  },
  icon: {
    marginRight: "10px",
    cursor: "pointer",
  },
}));

const Main = (props) => {
  const classes = useStyles();

  const handleSubmitClick = () => {
    alert("Data Submited");
  };
  const handleSaveClick = () => {
    alert("Data Saved");
  };
  return (
    <>
      <CssBaseline />
      <AppBar maxWidth="sm" position="relative">
        <Toolbar>
          <FaReact size="1.8rem" className={classes.icon} />
          <Typography className={classes.icon} variant="h6">
            TRM
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            color="textPrimary"
            align="center"
            gutterBottom
            style={{ color: "whitesmoke" }}
          >
            TRM CHECKLIST
          </Typography>

          <div className={classes.button}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Tooltip title="Submit" placement="top">
                  <Button
                    variant="contained"
                    // color="primary"
                    style={{ backgroundColor: "#2979ff", color: "white" }}
                    endIcon={<MdSend />}
                    onClick={handleSubmitClick}
                  >
                    Submit
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Save" placement="top">
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<MdSend />}
                    onClick={handleSaveClick}
                  >
                    Save
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <div></div>
    </>
  );
};

export default Main;
