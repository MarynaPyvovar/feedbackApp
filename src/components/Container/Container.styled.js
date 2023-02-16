import styled from 'styled-components';

export const StyledContainer = styled.section`
  padding: ${({ theme }) => theme.container.mobile};
  overflow-y: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.container.tablet};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.container.desktop};
  }
`;
