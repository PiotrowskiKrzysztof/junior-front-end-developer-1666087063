import ContextItem from "../ContextItem";
import * as Styled from "./styles";

export const ContextList = () => {
  return (
    <Styled.Container>
      <ContextItem status={"new"} />
      <ContextItem status={"active"} />
      <ContextItem status={"done"} />
    </Styled.Container>
  );
};

export default ContextList;
