import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 174px;
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -15px;
  left: 10px;
  color: ${({ theme }) => `${theme.colors.error}`};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 15px 30px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => `${theme.colors.border}`};
  border-radius: 10px;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  color: #2d2d2d;
  line-height: 1.8;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => `${theme.colors.yellow}`};
    outline: none;
  }

  &::placeholder {
    font-size: ${({ theme }) => `${theme.fontSizes.small}`};
    color: #2d2d2d;
    line-height: 1.8;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 557px;
    padding: 30px 45px;
  }
`;

export const StyledMessage = styled.textarea`
  display: block;
  width: 100%;
  padding: 15px 30px;
  margin-bottom: 30px;
  height: 190px;
  border: 1px solid ${({ theme }) => `${theme.colors.border}`};
  border-radius: 10px;
  resize: none;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  color: #2d2d2d;
  line-height: 1.8;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => `${theme.colors.yellow}`};
    outline: none;
  }

  &::placeholder {
    font-size: ${({ theme }) => `${theme.fontSizes.small}`};
    color: #2d2d2d;
    line-height: 1.8;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 557px;
    padding: 30px 45px;
  }
`;
