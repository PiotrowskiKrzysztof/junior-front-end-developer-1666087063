import Task from "../../molecules/Task";
import * as Styled from "./styles";
import { useTasksContext } from "../AppWraper";
import { Link } from "react-router-dom";
import { useState } from "react";

const TasksList = () => {
  const context = useTasksContext();
  const [selectedTask, setSelectedTask] = useState();
  return (
    <Styled.Container>
      <Styled.Header variant="header">YOUR TASKS</Styled.Header>
      <Styled.TasksContainer>
        {context?.tasks.map((task) => (
          <Link key={task?.id} to={task?.id}>
            <Task
              {...task}
              selectedTask={selectedTask}
              handleSelectedTask={
                task?.status !== "locked"
                  ? () => setSelectedTask(task?.id)
                  : null
              }
            />
          </Link>
        ))}
      </Styled.TasksContainer>
    </Styled.Container>
  );
};

export default TasksList;
