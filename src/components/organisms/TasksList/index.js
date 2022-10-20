import Task from "../../molecules/Task";
import * as Styled from "./styles";
import { useTasksContext } from "../AppWraper";
import { useState } from "react";
import ConditionalLink from "../../atoms/ConditionalLink";

const TasksList = () => {
  const context = useTasksContext();
  const [selectedTask, setSelectedTask] = useState();
  return (
    <Styled.Container>
      <Styled.Header variant="header">YOUR TASKS</Styled.Header>
      <Styled.TasksContainer>
        {context?.tasks.map((task) => (
          <ConditionalLink
            key={task?.id}
            to={task?.id}
            condition={task?.status !== "locked"}
          >
            <Task
              {...task}
              selectedTask={selectedTask}
              handleSelectedTask={
                task?.status !== "locked"
                  ? () => setSelectedTask(task?.id)
                  : null
              }
            />
          </ConditionalLink>
        ))}
      </Styled.TasksContainer>
    </Styled.Container>
  );
};

export default TasksList;
