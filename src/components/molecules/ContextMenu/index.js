import { Tab } from "../../../assets/svg";
import { Typography } from "../../atoms/Typography";
import * as Styled from "./styles";

const ContextMenu = () => (
  <Styled.Container>
    <Styled.Button isActive={true}>
      <Tab />
      <Typography variant="header">BUSINESS CONTEXT</Typography>
    </Styled.Button>
  </Styled.Container>
);

export default ContextMenu;
