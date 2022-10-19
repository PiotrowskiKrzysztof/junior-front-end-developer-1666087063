import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 0;
  grid-column: 1 / 3;
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.Black};
  }
  img {
    cursor: pointer;
  }
`;
