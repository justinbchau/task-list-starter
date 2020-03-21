import React from "react";
import Navbar from "../components/Navbar";
import { Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar title="Home" />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h2"
            style={{ textAlign: "center" }}
          >
            Welcome to the Task List App!
          </Typography>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              Click to Get Started!
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
