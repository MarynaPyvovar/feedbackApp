import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 100%;
  padding: 27px 50px;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  line-height: 1;
  color: ${({ theme }) => `${theme.colors.white}`};
  background-color: ${({ theme }) => `${theme.colors.yellow}`};
  border: 1px solid transparent;
  border-radius: 500px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 218px;
  }
`;
