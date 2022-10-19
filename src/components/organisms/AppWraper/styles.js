import styled from "styled-components";

export const AppWraper = styled.div`
  background-color: ${({ theme }) => theme.colors.GreyBackground};
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grit-template-rows: auto 1fr auto;
  column-gap: 1rem;
`;
