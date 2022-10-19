import { useState, createContext, useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";
import TasksList from "../TasksList";
import { dummyTasks } from "./consts";

import * as Styled from "./styles";

const TasksContext = createContext(null);

export const AppWraper = () => {
  const [selectedTask, setSelectedTask] = useState(dummyTasks[0].id);
  const context = {
    selectedTask,
    setSelectedTask,
  };
  return (
    <TasksContext.Provider value={context}>
      <Styled.AppWraper>
        <Header />
        <TasksList {...{ dummyTasks }} />
        <Footer />
      </Styled.AppWraper>
    </TasksContext.Provider>
  );
};

export function useTasksContext() {
  return useContext(TasksContext);
}
