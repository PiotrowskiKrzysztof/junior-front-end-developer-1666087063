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
  return (
    <Styled.Container>
      <ContextMenu />
      <ContextList {...selectedObject} {...{ setSelectedContext }} />
      {selectedContext && <Message {...selectedContext} />}
    </Styled.Container>
  );
};

export default BusinessContext;
