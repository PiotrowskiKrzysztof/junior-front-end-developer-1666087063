import { createContext, useContext } from "react";
import BusinessContext from "../BusinessContext";
import { dummyTasks } from "./consts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Styled from "./styles";
import Layout from "../../../pages/Layout";
import { useState } from "react";

const TasksContext = createContext(null);

export const AppWraper = () => {
  const [tasks, setTasks] = useState(dummyTasks);
  const context = {
    tasks,
    setTasks,
  };
  return (
    <TasksContext.Provider value={context}>
      <Styled.AppWraper>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {context?.tasks.map((task) => (
                <Route
                  key={task?.id}
                  path={`/:taskId`}
                  element={<BusinessContext />}
                />
              ))}
            </Route>
          </Routes>
        </Router>
      </Styled.AppWraper>
    </TasksContext.Provider>
  );
};

export function useTasksContext() {
  return useContext(TasksContext);
}
