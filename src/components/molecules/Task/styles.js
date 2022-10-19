import styled, { css } from "styled-components";
import { Typography } from "../../atoms/Typography";

export const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 0.25rem;
  ${({ isLocked }) =>
    !isLocked &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.Blue};
        fill: ${({ theme }) => theme.colors.Blue};
        background: rgba(1, 103, 255, 0.2);
      }
    `}
`;

export const Title = styled(Typography)`
  margin-left: 0.5rem;
`;
