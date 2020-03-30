import React, { useContext, useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { removeTask, toggleTask, setTasks } = useContext(TaskContext);

  const [checked, setChecked] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    const currentId = e.currentTarget.id;
    console.log(currentId);
    const newCheckedState = (task[currentId].done = !task[currentId].done);
    setTasks(newCheckedState);
  };

  return (
    <ListItem key={task.id} role="listitem" button divider>
      <ListItemIcon
        id={task.id}
        checked={checked}
        type="checkbox"
        onClick={handleToggle}
      >
        <FormControlLabel
          control={<Checkbox edge="start" value={task.done} />}
        />
      </ListItemIcon>
      <ListItemText className="task-list" primary={task.title} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeTask(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
