import { Logo } from "../../../assets/svg";
import user from "../../../assets/images/Frame46.png";
import * as Styled from "./styles";
import ProfilePhoto from "../../atoms/ProfilePhoto";

const Header = () => (
  <Styled.Container>
    <Logo />
    <ProfilePhoto photoSrc={user} isActive={true} />
  </Styled.Container>
);

export default Header;
