import ProfilePhoto from "../../atoms/ProfilePhoto";
import * as Styled from "./styles";
import photo from "../../../assets/images/mEZ3PoFGs_k.png";
import { Typography } from "../../atoms/Typography";
import moment from "moment/moment";

const Message = ({ title, author, content, created_at }) => {
  const dateData = {
    day: new Date(created_at).getDate(),
    month: new Date(created_at).getMonth(),
    year: new Date(created_at).getFullYear(),
    hours: new Date(created_at).getHours(),
    minutes: new Date(created_at).getMinutes(),
  };

  return (
    <Styled.Container>
      <Styled.Title variant="messageTitle">{title}</Styled.Title>
      <ProfilePhoto photoSrc={photo} isActive={false} />
      <Styled.MessageContent>
        <Styled.MessageInfo>
          <Styled.Author>{author}</Styled.Author>
          <Typography variant="smallText"> •</Typography>
          <Typography variant="smallText">
            {moment([dateData.year, dateData.month, dateData.day]).fromNow()}
          </Typography>
          <Typography variant="smallText">•</Typography>
          <Typography variant="smallText">{`${dateData.hours}:${dateData.minutes}`}</Typography>
        </Styled.MessageInfo>
        <Styled.MessageText>{content}</Styled.MessageText>
      </Styled.MessageContent>
    </Styled.Container>
  );
};

export default Message;
