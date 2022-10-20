import { useState } from "react";
import { Typography } from "../../atoms/Typography";
import * as Styled from "./styles";

const ContextItem = ({
  title,
  author,
  created_at,
  status,
  handleSelectedContext,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const date = new Date(created_at);
  return (
    <Styled.Container status={currentStatus} onClick={handleSelectedContext}>
      <Styled.InfoContainer>
        {status === "new" && <Styled.New fontSize="fontSize10">NEW</Styled.New>}
        <Typography fontSize="fontSize10">{author}</Typography>
        <Typography fontSize="fontSize10">•</Typography>
        <Typography fontSize="fontSize10">{`${date.toLocaleString("en", {
          month: "short",
        })} ${date.getDate()}`}</Typography>
      </Styled.InfoContainer>
      <Styled.Title variant="subHeader" {...{ status }}>
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
