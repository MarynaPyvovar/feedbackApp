import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSizes.large}`};
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme }) => `${theme.colors.title}`};
  margin-bottom: 30px;
`;
