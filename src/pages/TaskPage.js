import React from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";

const TaskPage = () => {
  return (
    <div>
      <Navbar title="Task List" />
      <TaskList />
    </div>
  );
};

export default TaskPage;
