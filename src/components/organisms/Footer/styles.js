import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  grid-column: 1 / 3;
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.fontSize8};
`;

export const FlexContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.GreyBodycopy};
`;
