import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Button, Typography } from "@material-ui/core/";
import Navbar from "../components/Navbar";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
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

const LoginPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar title="Login" />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in:
          </Typography>
          <form className={classes.form} autoComplete="off">
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              required
              type="username"
              label="Username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="password"
              type="password"
              label="Password"
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              className={classes.submit}
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default LoginPage;
