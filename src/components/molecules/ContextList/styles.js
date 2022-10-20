import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.GreyBackground};
  padding: 0.75rem 0.5rem;
  margin: 0 0 0.25rem 0.25rem;
  border-radius: 0 0 0 0.625rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  @media only screen and (max-width: 459px) {
    margin: 0;
  }
`;
