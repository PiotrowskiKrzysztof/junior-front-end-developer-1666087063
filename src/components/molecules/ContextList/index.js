import { useTasksContext } from "../../organisms/AppWraper";
import ContextItem from "../ContextItem";
import * as Styled from "./styles";
import { useParams } from "react-router-dom";

export const ContextList = () => {
  const context = useTasksContext();
  const { taskId } = useParams();
  const selectedObject = context?.tasks.find((task) => task?.id === taskId);
  return (
    <Styled.Container>
      {selectedObject?.businessContexts.map((item) => (
        <ContextItem key={item?.id} {...item} />
      ))}
    </Styled.Container>
  );
};

export default ContextList;
