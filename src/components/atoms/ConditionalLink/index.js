import { Link } from "react-router-dom";

const ConditionalLink = ({ to, condition, children }) =>
  condition && to ? <Link {...{ to }}>{children}</Link> : <>{children}</>;

export default ConditionalLink;
