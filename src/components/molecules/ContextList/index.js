import { useTasksContext } from "../../organisms/AppWraper";
import ContextItem from "../ContextItem";
import * as Styled from "./styles";
import { useState, useEffect } from "react";

export const ContextList = () => {
  const context = useTasksContext();
  const [selectedObject, setSelectedObject] = useState(
    context?.tasks.find((task) => task?.id === context?.selectedTask)
  );
  useEffect(() => {
    setSelectedObject(
      context?.tasks.find((task) => task?.id === context?.selectedTask)
    );
  }, [context?.selectedTask]);
  return (
    <Styled.Container>
      {selectedObject?.businessContexts.map((item) => (
        <ContextItem {...item} />
      ))}
    </Styled.Container>
  );
};

export default ContextList;
