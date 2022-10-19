import ProfilePhoto from "../../atoms/ProfilePhoto";
import * as Styled from "./styles";
import photo from "../../../assets/images/mEZ3PoFGs_k.png";
import { Typography } from "../../atoms/Typography";

const Message = () => (
  <Styled.Container>
    <Styled.Title variant="messageTitle">
      Application has been accepted 🎉 🙌
    </Styled.Title>
    <ProfilePhoto photoSrc={photo} isActive={false} />
    <Styled.MessageContent>
      <Styled.MessageInfo>
        <Styled.Author>Kirsten Aniston</Styled.Author>
        <Typography variant="smallText"> •</Typography>
        <Typography variant="smallText">Today, 17th December</Typography>
        <Typography variant="smallText">•</Typography>
        <Typography variant="smallText">11:20</Typography>
      </Styled.MessageInfo>
      <Styled.MessageText>
        Hello! Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Styled.MessageText>
    </Styled.MessageContent>
  </Styled.Container>
);

export default Message;
