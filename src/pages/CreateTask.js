import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { Container, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TaskContext } from "../context/TaskContext";
import history from "../history";

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

const CreateTask = () => {
  const { addTasks } = useContext(TaskContext);
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTasks(title, description);
    setTitle("");
    setDescription("");
    history.push("/dashboard");
  };

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create a Task:
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              value="add task"
            >
              Create
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CreateTask;
