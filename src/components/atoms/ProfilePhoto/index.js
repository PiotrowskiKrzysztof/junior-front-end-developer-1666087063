import * as Styled from "./styles";

const ProfilePhoto = ({ photoSrc, isActive }) => (
  <Styled.Photo src={photoSrc} alt="User" {...{ isActive }} />
);

export default ProfilePhoto;
