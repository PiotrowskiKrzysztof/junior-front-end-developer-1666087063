import { Done, Progress, Locked } from "../../../assets/svg";
import * as Styled from "./styles";

const Task = ({ title, status, businessContexts, selectedTask }) => {
  return (
    <Styled.Container isLocked={status === "locked" ? true : false}>
      {{ done: <Done />, progress: <Progress />, locked: <Locked /> }[status]}
      <Styled.Title
        variant="subHeader"
        fontWeight={selectedTask === title ? "semiBold" : "medium"}
      >
        {title}
      </Styled.Title>
    </Styled.Container>
  );
};

export default Task;
