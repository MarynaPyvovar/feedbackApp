import styled from 'styled-components';

export const StyledList = styled.ul`
  max-width: 560px;
`;

export const StyledHeading = styled.p`
  color: ${({ theme }) => `${theme.colors.title}`};
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const StyledMessage = styled.p`
  color: ${({ theme }) => `${theme.colors.title}`};
  margin-bottom: 15px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
