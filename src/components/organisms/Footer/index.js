import { Typography } from "../../atoms/Typography";
import * as Styled from "./styles";

export const Footer = () => (
  <Styled.Container>
    <Styled.FlexContainer>
      <Styled.Link href="/">Terms of service</Styled.Link>
      <Typography variant="footerText">•</Typography>
      <Styled.Link href="/">Privacy policy</Styled.Link>
      <Typography variant="footerText">•</Typography>
      <Styled.Link href="/">Copyright</Styled.Link>
    </Styled.FlexContainer>
    <Styled.FlexContainer>
      <Typography variant="footerText">nerds.family Version 1.2</Typography>
      <Typography variant="footerText">•</Typography>
      <Typography variant="footerText">Last update 10/09/2022</Typography>
    </Styled.FlexContainer>
  </Styled.Container>
);

export default Footer;
