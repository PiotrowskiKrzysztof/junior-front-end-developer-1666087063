import styled, { css } from "styled-components";
import { Typography } from "../../atoms/Typography";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.White};
  padding: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  text-align: left;
  width: 100%;
  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0px 0.5rem 1rem rgba(84, 84, 84, 0.2);
      background-color: ${({ theme }) => theme.colors.White} !important;
    `}
  ${({ status }) =>
    status === "done" &&
    css`
      background-color: transparent;
    `}
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.688rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.GreyBodycopy};
`;

export const New = styled(Typography)`
  padding: 0.188rem 0.313rem;
  background-color: ${({ theme }) => theme.colors.Blue};
  color: ${({ theme }) => theme.colors.White};
  border-radius: 0.25rem;
`;

export const Title = styled(Typography)`
  margin-bottom: 0.5rem;
  ${({ status }) =>
    status === "new" &&
    css`
      color: ${({ theme }) => theme.colors.Blue};
    `}
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.colors.GreyBodycopy};
`;
