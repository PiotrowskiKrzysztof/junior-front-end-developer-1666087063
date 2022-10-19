import styled from "styled-components";
import { variant, typography } from "styled-system";
import { textStyles } from "../../../theme/typography";

export const Typography = styled.p`
  ${typography};
  ${variant({ prop: "variant", variants: textStyles })}
`;
