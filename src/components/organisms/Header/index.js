import "./styles.css";
import { Logo } from "../../../assets/svg";
import user from "../../../assets/images/Frame46.png";

const Header = () => (
  <div className="header">
    <Logo />
    <img src={user} alt="User" />
  </div>
);

export default Header;
