import { createContext, useContext } from "react";
import BusinessContext from "../BusinessContext";
import { dummyTasks } from "./consts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Styled from "./styles";
import Layout from "../../../pages/Layout";

const TasksContext = createContext(null);

export const AppWraper = () => {
  const context = {
    tasks: dummyTasks,
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
