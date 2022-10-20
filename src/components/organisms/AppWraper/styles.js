import styled from "styled-components";

export const AppWraper = styled.div`
  background-color: ${({ theme }) => theme.colors.GreyBackground};
  position: relative;
  padding: 0.5rem 2rem;
  display: grid;
  column-gap: 1rem;
  @media only screen and (max-width: 459px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 1fr auto;
    width: 100%;
    height: 100vh;
  }
  @media only screen and (min-width: 460px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 2fr auto;
    width: 100%;
    height: 100vh;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 4fr;
    grit-template-rows: auto 1fr auto;
    width: 100vw;
    height: 100vh;
  }
`;
