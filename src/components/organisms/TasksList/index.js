import Task from "../../molecules/Task";
import * as Styled from "./styles";
import { dummyTasks } from "./consts";
import { useState } from "react";

const TasksList = () => {
  const [selectedTask, setSelectedTask] = useState(dummyTasks[0].title);
  return (
    <Styled.Container>
      <Styled.Header variant="header">YOUR TASKS</Styled.Header>
      <Styled.TasksContainer>
        {dummyTasks.map((task) => (
          <div
            onClick={
              task?.status !== "locked"
                ? () => setSelectedTask(task?.title)
                : null
            }
          >
            <Task key={task?.id} {...task} {...{ selectedTask }} />
          </div>
        ))}
      </Styled.TasksContainer>
    </Styled.Container>
  );
};

export default TasksList;
