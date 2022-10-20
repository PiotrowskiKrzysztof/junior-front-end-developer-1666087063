import { useTasksContext } from "../../organisms/AppWraper";
import { useParams } from "react-router";
import ContextList from "../../molecules/ContextList";
import ContextMenu from "../../molecules/ContextMenu";
import Message from "../../molecules/Message";
import * as Styled from "./styles";
import { useState } from "react";

const BusinessContext = () => {
  const context = useTasksContext();
  const { taskId } = useParams();
  const selectedObject = context?.tasks.find((task) => task?.id === taskId);
  const [selectedContext, setSelectedContext] = useState(null);

  const changeStatus = (contextId) => {
    const data = [...context?.tasks];
    const index = data.findIndex((obj) => obj.id === taskId);
    const index2 = data[index].businessContexts.findIndex(
      (obj) => obj.id === contextId
    );
    data[index].businessContexts[index2].status = "done";
    context?.setTasks(data);
  };

  return (
    <Styled.Container>
      <ContextMenu />
      <ContextList
        {...selectedObject}
        {...{ setSelectedContext }}
        {...{ changeStatus }}
      />
      {selectedContext && <Message {...selectedContext} />}
    </Styled.Container>
  );
};

export default BusinessContext;
