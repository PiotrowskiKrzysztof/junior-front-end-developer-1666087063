import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 0;
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.Black};
  }
  img {
    border: 0.063rem solid ${({ theme }) => theme.colors.GreyBodycopy};
    padding: 0.125rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;
