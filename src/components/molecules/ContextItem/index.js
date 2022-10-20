import { useState } from "react";
import { useParams } from "react-router";
import { Typography } from "../../atoms/Typography";
import { useTasksContext } from "../../organisms/AppWraper";
import * as Styled from "./styles";

const ContextItem = ({
  id,
  title,
  author,
  created_at,
  status,
  handleSelectedContext,
  activeItem,
  setActiveItem,
  handleChangeStatus,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const date = new Date(created_at);
  const { taskId } = useParams();
  const context = useTasksContext();

  const unlockNexTask = () => {
    const index = context?.tasks.findIndex((obj) => obj.id === taskId);
    if (
      !context?.tasks[index].businessContexts.some(
        (obj) => obj.status === "new"
      )
    ) {
      if (index === context?.tasks.length - 1) {
        const newTasks = [...context?.tasks];
        newTasks[index].status = "done";
        context?.setTasks(newTasks);
      } else if (index < context?.tasks.length) {
        const newTasks = [...context?.tasks];
        newTasks[index].status = "done";
        if (newTasks[index + 1].status === "locked") {
          newTasks[index + 1].status = "progress";
        }

        context?.setTasks(newTasks);
      }
    }
  };

  return (
    <Styled.Container
      status={currentStatus}
      onClick={() => {
        handleSelectedContext();
        setActiveItem(id);
        setCurrentStatus("done");
        handleChangeStatus();
        unlockNexTask();
      }}
      isActive={activeItem === id}
    >
      <Styled.InfoContainer>
        {currentStatus === "new" && (
          <Styled.New fontSize="fontSize10">NEW</Styled.New>
        )}
        <Typography fontSize="fontSize10">{author}</Typography>
        <Typography fontSize="fontSize10">•</Typography>
        <Typography fontSize="fontSize10">{`${date.toLocaleString("en", {
          month: "short",
        })} ${date.getDate()}`}</Typography>
      </Styled.InfoContainer>
      <Styled.Title variant="subHeader" {...{ currentStatus }}>
        {title}
      </Styled.Title>
      <Styled.Description variant="smallText">
        Hi Eric, congratulations on completing the previous assignment. This
        time you will have to focus on...
      </Styled.Description>
    </Styled.Container>
  );
};

export default ContextItem;
