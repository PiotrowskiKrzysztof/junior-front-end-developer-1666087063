import styled from "styled-components";
import { Typography } from "../../atoms/Typography";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  width: 25%;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.Shadow};
`;

export const Header = styled(Typography)`
  padding: 1.5rem;
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.GreyBackground};
`;

export const TasksContainer = styled.div`
  padding: 1.5rem 1.5rem 0 1.5rem;
  margin-right: 0.25rem;
  overflow-y: auto;
  height: 78vh;
  scrollbar-color: ${({ theme }) => theme.colors.GreyBackground};
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.GreyBackground};
    border-radius: 0.75rem;
  }
`;
