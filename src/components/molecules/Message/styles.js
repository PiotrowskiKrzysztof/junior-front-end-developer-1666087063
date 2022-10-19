import styled from "styled-components";
import { Typography } from "../../atoms/Typography";

export const Container = styled.section`
  padding: 1.125rem 2.25rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
`;

export const Title = styled(Typography)`
  margin-bottom: 0.875rem;
  grid-column: 1 / 3;
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.GreyBodycopy};
  margin-left: 0.875rem;
  margin-top: 0.875rem;
`;

export const Author = styled(Typography)`
  color: ${({ theme }) => theme.colors.BlackHeadline};
`;

export const MessageInfo = styled.div`
  display: flex;
  column-gap: 0.688rem;
  align-items: center;
`;

export const MessageText = styled.pre`
  max-width: 50vw;
  font-size: ${({ theme }) => theme.fontSizes.fontSize21};
  line-height: 2em;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: pre-wrap;
`;
