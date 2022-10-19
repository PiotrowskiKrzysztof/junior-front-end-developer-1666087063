import ContextList from "../../molecules/ContextList";
import ContextMenu from "../../molecules/ContextMenu";
import Message from "../../molecules/Message";
import * as Styled from "./styles";

const BusinessContext = () => (
  <Styled.Container>
    <ContextMenu />
    <ContextList />
    <Message />
  </Styled.Container>
);

export default BusinessContext;
