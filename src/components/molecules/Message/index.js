import ProfilePhoto from "../../atoms/ProfilePhoto";
import * as Styled from "./styles";
import photo from "../../../assets/images/mEZ3PoFGs_k.png";
import { Typography } from "../../atoms/Typography";
import moment from "moment/moment";

const Message = ({ title, author, content, created_at }) => {
  // const rtf = new Intl.RelativeTimeFormat("en-us");
  // const difrenceDay = new Date(created_at).getDate() - new Date().getDate();
  // console.log(tmpDate);

  // const dateFormater = () => {
  //   const rtf = new Intl.RelativeTimeFormat("en-us");
  //   const today = new Date();
  //   const date2 = new Date(created_at);
  //   // const diffrenceDays =
  //   //   Math.abs(today.getTime() - created.getTime()) / (1000 * 3600 * 24);

  //   const diffrenceTime = Math.abs(today - date2);
  //   const diffrenceDays = Math.ceil(diffrenceTime / (1000 * 3600 * 24));
  //   if (diffrenceDays === 1) return "Today";
  //   else if (diffrenceDays === 7) return "Week ago";
  //   else if (diffrenceDays >= 14) return (diffrenceDays % 7) + " Weeks ago";
  //   else if (diffrenceDays >= 30)
  //   console.log(diffrenceDays);
  // };

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
          {/* <Typography variant="smallText">{`${rtf.format(
            new Date(created_at).getDate() - new Date().getDate(),
            "day"
          )}, 17th December`}</Typography> */}
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
