import styled, { css } from "styled-components";

export const Photo = styled.img`
  padding: 0.125rem;
  border-radius: 50%;
  ${({ isActive }) =>
    isActive
      ? css`
          border: 0.063rem solid ${({ theme }) => theme.colors.GreyBodycopy};
        `
      : css`
          border: 0.063rem solid ${({ theme }) => theme.colors.InActive};
        `}
`;
