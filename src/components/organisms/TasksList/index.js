import Task from "../../molecules/Task";
import * as Styled from "./styles";
import { useTasksContext } from "../AppWraper";

const TasksList = ({ dummyTasks }) => {
  const context = useTasksContext();
  return (
    <Styled.Container>
      <Styled.Header variant="header">YOUR TASKS</Styled.Header>
      <Styled.TasksContainer>
        {dummyTasks.map((task) => (
          <div
            key={task?.id}
            onClick={
              task?.status !== "locked"
                ? () => context?.setSelectedTask(task?.id)
                : null
            }
          >
            <Task {...task} selectedTask={context?.selectedTask} />
          </div>
        ))}
      </Styled.TasksContainer>
    </Styled.Container>
  );
};

export default TasksList;
