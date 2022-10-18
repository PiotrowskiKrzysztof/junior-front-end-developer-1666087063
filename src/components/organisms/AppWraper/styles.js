import styled from "styled-components";

export const AppWraper = styled.div`
  background-color: ${({ theme }) => theme.colors.GreyBackground};
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0.5rem 2rem;
`;
