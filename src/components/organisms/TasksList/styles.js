import styled from "styled-components";
import { Typography } from "../../atoms/Typography";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.Shadow};
  @media only screen and (max-width: 459px) {
    margin-bottom: 2rem;
    width: calc(100vw - 4rem);
    height: 20vh;
  }
  @media only screen and (min-width: 460px) {
    grid-column: 1 / 3;
    height: 35vh;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 1200px) {
    grid-column: 1 / 2;
    height: 85vh;
    margin-bottom: 0;
  }
`;

export const Header = styled(Typography)`
  padding: 1.5rem;
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.GreyBackground};
`;

export const TasksContainer = styled.div`
  padding: 1.5rem 1.5rem 0 1.5rem;
  margin-right: 0.25rem;
  overflow-y: auto;
  height: 100%;
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
