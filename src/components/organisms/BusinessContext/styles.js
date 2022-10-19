import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  grid-column: 2 / 3;
  border-radius: 0.75rem;
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.Shadow};
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr;
`;
