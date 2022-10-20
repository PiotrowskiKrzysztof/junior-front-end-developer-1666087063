import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 0.75rem;
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.Shadow};
  display: grid;
  @media only screen and (max-width: 459px) {
    grid-column: 1 / 3;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-auto-flow: column;
  }
  @media only screen and (min-width: 460px) {
    grid-column: 1 / 3;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr;
  }
  @media only screen and (min-width: 1200px) {
    grid-column: 2 / 3;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr;
  }
`;
