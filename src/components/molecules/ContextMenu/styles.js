import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-column: 1 / 3;
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.GreyBackground};
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  column-gap: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.Blue};
  border: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: relative;
  &:hover {
    opacity 0.8;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      &:after {
        content: "";
        height: 0.125rem;
        width: calc(100% - 6rem);
        background-color: ${({ theme }) => theme.colors.Blue};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
    `}
`;
