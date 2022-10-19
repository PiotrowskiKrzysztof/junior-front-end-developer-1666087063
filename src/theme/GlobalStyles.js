import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${normalize};
${reset};
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.BlackHeadline};
}
a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyles;
