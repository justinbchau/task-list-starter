import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, setTasks] = useState([
    { title: "Get Coffee", id: 1 },
    { title: "Get Groceries", id: 2 },
    { title: "Pick up the kids", id: 3 }
  ]);

  const addTasks = title => {
    setTasks([...tasks, { title, id: 4 }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTasks, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
