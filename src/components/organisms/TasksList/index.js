import Task from "../../molecules/Task";
import * as Styled from "./styles";
import { useTasksContext } from "../AppWraper";

const TasksList = ({ tasks }) => {
  const context = useTasksContext();
  return (
    <Styled.Container>
      <Styled.Header variant="header">YOUR TASKS</Styled.Header>
      <Styled.TasksContainer>
        {tasks.map((task) => (
          <Task
            key={task?.id}
            {...task}
            selectedTask={context?.selectedTask}
            handleSelectedTask={
              task?.status !== "locked"
                ? () => context?.setSelectedTask(task?.id)
                : null
            }
          />
          // </div>
        ))}
      </Styled.TasksContainer>
    </Styled.Container>
  );
};

export default TasksList;
