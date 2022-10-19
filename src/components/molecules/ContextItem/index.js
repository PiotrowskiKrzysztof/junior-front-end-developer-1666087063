import { Typography } from "../../atoms/Typography";
import * as Styled from "./styles";

const ContextItem = ({ status }) => (
  <Styled.Container {...{ status }}>
    <Styled.InfoContainer>
      {status === "new" && <Styled.New fontSize="fontSize10">NEW</Styled.New>}
      <Typography fontSize="fontSize10">Olga Nelson</Typography>
      <Typography fontSize="fontSize10">•</Typography>
      <Typography fontSize="fontSize10">Dec 17</Typography>
    </Styled.InfoContainer>
    <Styled.Title variant="subHeader" {...{ status }}>
      New sprint, tasks and intro information.
    </Styled.Title>
    <Styled.Description variant="smallText">
      Hi Eric, congratulations on completing the previous assignment. This time
      you will have to focus on...
    </Styled.Description>
  </Styled.Container>
);

export default ContextItem;
