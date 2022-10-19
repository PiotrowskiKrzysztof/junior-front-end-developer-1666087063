import { Logo } from "../../../assets/svg";
import user from "../../../assets/images/Frame46.png";
import * as Styled from "./styles";

const Header = () => (
  <Styled.Container>
    <Logo />
    <img src={user} alt="User" />
  </Styled.Container>
);

export default Header;
