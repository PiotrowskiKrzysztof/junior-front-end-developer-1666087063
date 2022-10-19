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
  console.log(selectedObject);
  return (
    <Styled.Container>
      {/* {context?.tasks.map((item) => (
        <ContextItem {...item} />
      ))} */}
      {selectedObject?.businessContexts.map((item) => {
        <ContextItem {...item} />;
      })}
      {/* <ContextItem status={"new"} />
      <ContextItem status={"active"} />
      <ContextItem status={"done"} /> */}
    </Styled.Container>
  );
};

export default ContextList;
