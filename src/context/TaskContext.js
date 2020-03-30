import React, { createContext, useState, useEffect } from "react";
import tasksApi from "../api/tasksApi";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, setTasks] = useState([]);

  async function getData() {
    const res = await tasksApi.get("/tasks");
    console.log(res.data);
    return setTasks(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  const addTasks = async (title, description) => {
    const newTask = await tasksApi.post("/tasks", {
      title,
      description
    });

    console.log(newTask);

    setTasks([
      ...tasks,
      {
        title: newTask.title,
        description: newTask.description,
        id: newTask._id
      }
    ]);
    getData();
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = async id => {
    const selectedTaskIndex = tasks.findIndex(task => task.id === id);
    console.log(tasks);
    tasks[selectedTaskIndex].done = !tasks[selectedTaskIndex].done;
    const updatedTask = await tasksApi.patch(`/tasks/${id}/done`);
    setTasks({ updatedTask });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTasks, removeTask, toggleTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
