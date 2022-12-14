import { Done, Progress, Locked } from "../../../assets/svg";
import * as Styled from "./styles";

const Task = ({ id, title, status, selectedTask, handleSelectedTask }) => {
  return (
    <Styled.Container
      onClick={handleSelectedTask}
      isLocked={status === "locked"}
    >
      {{ done: <Done />, progress: <Progress />, locked: <Locked /> }[status]}
      <Styled.Title
        variant="subHeader"
        fontWeight={selectedTask === id ? "semiBold" : "medium"}
      >
        {title}
      </Styled.Title>
    </Styled.Container>
  );
};

export default Task;
